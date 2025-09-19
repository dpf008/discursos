/**
 * Discurso-related tools for AI speech generation.
 * 
 * This file contains all tools related to speech generation operations including:
 * - AI-powered speech generation with structured output
 * - Context-aware prompting based on speaker type and occasion
 * - Structured speech blocks with speaker instructions
 */
import { createTool } from "@deco/workers-runtime/mastra";
import { z } from "zod";
import type { Env } from "../main.ts";

// Schema for speech block types
const BlocoDiscursoSchema = z.object({
  id: z.string(),
  tipo: z.enum(['texto', 'indicacao', 'pausa', 'gesto', 'enfase']),
  conteudo: z.string(),
  duracao: z.number().optional(),
  observacoes: z.string().optional(),
});

// Schema for generated speech
const DiscursoGeradoSchema = z.object({
  metadados: z.object({
    ocasiao: z.string(),
    tipoOrador: z.string(),
    estilo: z.string(),
    duracaoEstimada: z.string(),
    temas: z.array(z.string()),
  }),
  blocos: z.array(BlocoDiscursoSchema),
});

// Tool for generating speeches with AI
export const createGenerateDiscursoTool = (env: Env) =>
  createTool({
    id: "GENERATE_DISCURSO",
    description: "Gera discurso personalizado com IA baseado no contexto, ocasião e estilo do orador",
    inputSchema: z.object({
      tipoOrador: z.enum(['demolay-ativo', 'macom', 'senior', 'conselheiro']),
      ocasiao: z.string(),
      temas: z.array(z.string()),
      estilo: z.enum(['formal', 'inspiracional', 'narrativo', 'educativo']),
      duracaoDesejada: z.enum(['curto', 'medio', 'longo']).optional().default('medio'),
    }),
    outputSchema: z.object({
      discurso: DiscursoGeradoSchema,
    }),
    execute: async ({ context }) => {
      // Build contextual prompt based on speaker type and occasion
      const prompt = buildDiscursoPrompt(context);
      
      // Define the schema for AI generation
      const schema = {
        type: 'object',
        properties: {
          metadados: {
            type: 'object',
            properties: {
              ocasiao: { type: 'string' },
              tipoOrador: { type: 'string' },
              estilo: { type: 'string' },
              duracaoEstimada: { type: 'string' },
              temas: { type: 'array', items: { type: 'string' } },
            },
            required: ['ocasiao', 'tipoOrador', 'estilo', 'duracaoEstimada', 'temas']
          },
          blocos: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                tipo: { type: 'string', enum: ['texto', 'indicacao', 'pausa', 'gesto', 'enfase'] },
                conteudo: { type: 'string' },
                duracao: { type: 'number' },
                observacoes: { type: 'string' },
              },
              required: ['id', 'tipo', 'conteudo']
            }
          }
        },
        required: ['metadados', 'blocos']
      };

      try {
        // Call AI with structured schema
        const result = await env.DECO_CHAT_WORKSPACE_API.AI_GENERATE_OBJECT({
          messages: [
            {
              role: 'system',
              content: getSystemPrompt()
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          schema,
          model: 'gpt-4o',
          temperature: 0.7,
          maxTokens: 4000,
        });

        if (!result.object) {
          throw new Error("AI não retornou um objeto estruturado");
        }

        return { discurso: result.object as any };
      } catch (error) {
        console.error("Erro na geração do discurso:", error);
        throw new Error("Falha ao gerar discurso. Tente novamente.");
      }
    },
  });

// Helper function to build contextual prompt
function buildDiscursoPrompt(context: {
  tipoOrador: string;
  ocasiao: string;
  temas: string[];
  estilo: string;
  duracaoDesejada: string;
}) {
  const oradorContext = getOradorContext(context.tipoOrador);
  const estiloContext = getEstiloContext(context.estilo);
  const duracaoContext = getDuracaoContext(context.duracaoDesejada);
  
  return `
Gere um discurso personalizado com as seguintes características:

CONTEXTO DO ORADOR:
${oradorContext}

OCASIÃO:
${context.ocasiao}

TEMAS A ABORDAR:
${context.temas.join(', ')}

ESTILO DESEJADO:
${estiloContext}

DURAÇÃO:
${duracaoContext}

INSTRUÇÕES ESPECÍFICAS:
1. Crie um discurso estruturado em blocos sequenciais
2. Inclua blocos de texto (conteúdo falado) intercalados com indicações para o orador
3. Use linguagem apropriada para o contexto DeMolay/Maçônico quando relevante
4. Incorpore os valores de fraternidade, liderança e desenvolvimento pessoal
5. Mantenha o tom respeitoso e inspirador
6. Inclua momentos para pausas estratégicas, gestos e variações de ênfase
7. Termine com uma mensagem impactante e call-to-action apropriado

TIPOS DE BLOCOS:
- "texto": Conteúdo que será falado
- "indicacao": Orientações para o orador (ex: "Olhar para a plateia")
- "pausa": Momentos de silêncio (ex: "Pausa de 3 segundos")
- "gesto": Sugestões de gestos (ex: "Estender a mão direita")
- "enfase": Indicações de tom (ex: "Elevar a voz", "Tom mais suave")

Gere um discurso autêntico, envolvente e adequado ao contexto fornecido.
`;
}

// System prompt for AI behavior
function getSystemPrompt(): string {
  return `
Você é um especialista em oratória e discursos cerimoniais, com profundo conhecimento dos valores e tradições da Ordem DeMolay e Maçonaria. 

Sua função é criar discursos estruturados, inspiradores e apropriados para diferentes ocasiões e tipos de oradores. Você entende a importância da solenidade em cerimônias, mas também sabe adaptar o tom para eventos mais descontraídos.

Características dos seus discursos:
- Estruturados em blocos para facilitar a apresentação
- Incluem orientações práticas para o orador
- Respeitam os valores de fraternidade, liderança e desenvolvimento pessoal
- São autênticos e envolventes
- Adequados ao contexto e ocasião específicos

Sempre gere discursos que honrem a tradição enquanto são relevantes e impactantes para a audiência moderna.
`;
}

// Helper function to get speaker context
function getOradorContext(tipoOrador: string): string {
  const contexts = {
    'demolay-ativo': `
Você é um jovem DeMolay ativo, entre 13 e 21 anos, em processo de formação e desenvolvimento pessoal. 
Sua perspectiva é de quem está aprendendo e crescendo, mas já demonstra liderança e comprometimento com os valores da Ordem.
Fale com humildade, mas também com a paixão e energia da juventude.
`,
    'macom': `
Você é um Maçom experiente, conhecedor das tradições e valores da Sublime Ordem.
Sua perspectiva é de sabedoria adquirida e responsabilidade fraternal.
Fale com autoridade moral, mas sem arrogância, sempre como um irmão entre irmãos.
`,
    'senior': `
Você é um Senior DeMolay, alguém que passou pela experiência transformadora da Ordem DeMolay na juventude.
Sua perspectiva combina a nostalgia da experiência DeMolay com a maturidade da vida adulta.
Fale como quem pode inspirar os jovens atuais com sua experiência e gratidão pela formação recebida.
`,
    'conselheiro': `
Você é um Membro do Conselho Consultivo, um orientador dedicado ao desenvolvimento dos jovens DeMolays.
Sua perspectiva é de quem guia, protege e inspira a próxima geração.
Fale com a sabedoria de um mentor, sempre focado no crescimento e bem-estar dos jovens.
`
  };
  
  return contexts[tipoOrador as keyof typeof contexts] || contexts['demolay-ativo'];
}

// Helper function to get style context
function getEstiloContext(estilo: string): string {
  const styles = {
    'formal': `
ESTILO FORMAL E SOLENE:
- Use linguagem elevada e respeitosa
- Mantenha tom cerimonial apropriado
- Inclua referências tradicionais quando apropriado
- Estruture com introdução formal, desenvolvimento e conclusão solene
- Evite gírias ou linguagem muito casual
`,
    'inspiracional': `
ESTILO INSPIRACIONAL E MOTIVACIONAL:
- Use linguagem que desperte emoção e motivação
- Inclua call-to-actions claros e envolventes
- Foque em possibilidades e potencial
- Use metáforas e analogias impactantes
- Termine com uma mensagem que inspire ação
`,
    'narrativo': `
ESTILO PESSOAL E NARRATIVO:
- Incorpore histórias pessoais ou exemplos concretos
- Use linguagem mais próxima e acessível
- Conecte experiências pessoais com lições universais
- Mantenha um tom conversacional, mas respeitoso
- Faça a audiência se identificar com as histórias contadas
`,
    'educativo': `
ESTILO EDUCATIVO E REFLEXIVO:
- Foque em transmitir conhecimento e provocar reflexão
- Use exemplos claros para ilustrar conceitos
- Estruture o conteúdo de forma didática
- Inclua momentos para a audiência processar as informações
- Termine com pontos-chave para reflexão
`
  };
  
  return styles[estilo as keyof typeof styles] || styles['inspiracional'];
}

// Helper function to get duration context
function getDuracaoContext(duracao: string): string {
  const durations = {
    'curto': 'Entre 2-3 minutos (aproximadamente 300-450 palavras)',
    'medio': 'Entre 4-6 minutos (aproximadamente 600-900 palavras)', 
    'longo': 'Entre 7-10 minutos (aproximadamente 1000-1500 palavras)'
  };
  
  return durations[duracao as keyof typeof durations] || durations['medio'];
}

// Export all discurso-related tools
export const discursoTools = [
  createGenerateDiscursoTool,
];
