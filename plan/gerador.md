# Gerador de Discursos com IA - Página /gerador

## Visão Geral
Uma ferramenta interativa que utiliza Inteligência Artificial para gerar discursos personalizados baseados no contexto, ocasião e estilo do usuário. A página oferece uma experiência guiada que coleta informações específicas e gera discursos estruturados com blocos de texto e indicações para o orador.

## Fluxo de Autenticação
- **Verificação de Login**: Ao acessar `/gerador`, verificar se o usuário está autenticado
- **Redirecionamento**: Se não autenticado, redirecionar para `/oauth/start`
- **Sessão Persistente**: Manter dados do formulário durante o processo de autenticação

## Estrutura da Página

### 1. Header da Aplicação
- **Título**: "Gerador de Discursos com IA"
- **Subtítulo**: Breve explicação sobre a ferramenta
- **User Button**: Componente de usuário logado (já implementado)
- **Navegação**: Link para voltar à landing page

### 2. Seção "Você é" - Identificação do Orador
Interface de seleção do tipo de orador com opções específicas do contexto DeMolay:

#### Opções Disponíveis:
- **DeMolay Ativo** - Jovem membro da Ordem
- **Maçom** - Membro da Maçonaria
- **Senior DeMolay** - Ex-DeMolay adulto
- **Membro do Conselho Consultivo** - Orientador da Ordem

### 3. Seção "Qual ocasião do discurso?" - Contexto do Evento
Seleção da ocasião específica que determinará o tom e conteúdo:

#### Categorias de Ocasiões:
- **Cerimoniais**:
  - Posse de nova gestão
  - Iniciação
  - Elevação
  - Cerimônia Pública

- **Comemorativas**:
  - Dia das Mães
  - Dia dos Pais
  - Aniversário do Capítulo
  - Datas especiais da Ordem

- **Administrativas**:
  - Reunião Ordinária
  - Assembleia
  - Prestação de contas

- **Sociais**:
  - Confraternização
  - Evento beneficente
  - Apresentação pública

### 4. Seção "Assuntos" - Temas do Discurso
Interface para definir os temas principais:

#### Campo de Texto Livre:
- **Input**: "Quais assuntos gostaria de falar sobre?"
- **Placeholder**: "Ex: liderança, fraternidade, valores morais..."
- **Sugestões Contextuais**: Baseadas na ocasião selecionada

#### Ou Temas Pré-definidos:
- **Botões de Seleção Rápida**: Temas comuns por ocasião
- **Combinação**: Permitir seleção múltipla de temas

### 5. Seção "Estilo do Discurso" - Personalização do Tom
Apresentação de 4 estilos diferentes com exemplos:

#### Estilos Disponíveis:
1. **Formal e Solene**
   - Nome: "O Clássico"
   - Exemplo: Trecho formal com linguagem elevada
   - Uso: Cerimônias oficiais, posses

2. **Inspiracional e Motivacional**
   - Nome: "O Inspirador"
   - Exemplo: Trecho motivacional com call-to-action
   - Uso: Reuniões, eventos de desenvolvimento

3. **Pessoal e Narrativo**
   - Nome: "O Contador de Histórias"
   - Exemplo: Trecho com história pessoal
   - Uso: Eventos sociais, comemorações

4. **Educativo e Reflexivo**
   - Nome: "O Mestre"
   - Exemplo: Trecho com ensinamento moral
   - Uso: Instruções, palestras educativas

### 6. Botão "Gerar com IA" - Ação Principal
- **Design**: Botão destacado com visual premium
- **Loading State**: Indicador de processamento
- **Feedback**: Mensagem de progresso durante geração

## Geração com IA - Estrutura Técnica

### Schema de Output Estruturado
A IA gerará um objeto JSON com blocos sequenciais ao invés de texto corrido:

```typescript
interface DiscursoGerado {
  metadados: {
    ocasiao: string;
    tipoOrador: string;
    estilo: string;
    duracaoEstimada: string; // "3-5 minutos"
    temas: string[];
  };
  blocos: BlocoDiscurso[];
}

interface BlocoDiscurso {
  id: string;
  tipo: 'texto' | 'indicacao' | 'pausa' | 'gesto' | 'enfase';
  conteudo: string;
  duracao?: number; // em segundos
  observacoes?: string;
}
```

### Tipos de Blocos:
- **texto**: Conteúdo falado do discurso
- **indicacao**: Orientações para o orador ("Olhar para a plateia")
- **pausa**: Momentos de silêncio estratégico ("Pausa de 3 segundos")
- **gesto**: Sugestões de gestos ("Estender a mão direita")
- **enfase**: Indicações de tom ("Elevar a voz", "Tom mais suave")

### Parâmetros de Geração:
- **Duração**: Baseada na ocasião (2-3 min para reunião, 5-7 min para cerimônia)
- **Complexidade**: Ajustada ao tipo de orador
- **Tom**: Definido pelo estilo selecionado
- **Estrutura**: Introdução, desenvolvimento, conclusão com call-to-action

## Interface de Resultado

### 1. Visualização do Discurso Gerado
- **Modo Leitura**: Texto corrido para leitura natural
- **Modo Apresentação**: Blocos separados com indicações visuais
- **Contador de Tempo**: Duração estimada por bloco e total

### 2. Controles de Edição
- **Regenerar Blocos**: Opção para regenerar partes específicas
- **Ajustar Tom**: Modificar estilo sem perder conteúdo
- **Adicionar/Remover**: Blocos customizáveis

### 3. Ferramentas de Prática
- **Modo Teleprompter**: Apresentação em tela cheia
- **Controle de Velocidade**: Ajuste de ritmo de leitura
- **Marcadores**: Destaque de pontos importantes

### 4. Exportação
- **PDF**: Versão para impressão
- **Áudio**: Síntese de voz para treino
- **Compartilhamento**: Link para visualização

## Design Visual

### Paleta de Cores (Consistente com Landing)
- **Primárias**: Azul marinho (#1B365D) e Dourado (#D4AF37)
- **Secundárias**: Creme (#F5F5DC) e Borgonha (#800020)
- **Status**: Verde para sucesso, âmbar para atenção

### Layout Responsivo
- **Desktop**: Formulário em coluna única com seções bem definidas
- **Tablet**: Adaptação de botões e campos
- **Mobile**: Stack vertical com navegação por etapas

### Componentes UI

#### Seletores de Opção:
```tsx
// Componente de seleção visual
<OptionCard 
  title="DeMolay Ativo"
  description="Jovem membro da Ordem"
  icon={<StarIcon />}
  selected={selectedType === 'demolay-ativo'}
  onClick={() => setSelectedType('demolay-ativo')}
/>
```

#### Exemplos de Estilo:
```tsx
// Card com exemplo de discurso
<StyleExample
  name="O Clássico"
  description="Formal e Solene"
  example="Respeitáveis irmãos, é com grande honra..."
  selected={selectedStyle === 'formal'}
  onSelect={() => setSelectedStyle('formal')}
/>
```

## Integração Técnica

### Tools do Servidor
```typescript
// server/tools/discurso.ts
const createGenerateDiscursoTool = (env: Env) =>
  createTool({
    id: "GENERATE_DISCURSO",
    description: "Gera discurso personalizado com IA",
    inputSchema: z.object({
      tipoOrador: z.enum(['demolay-ativo', 'macom', 'senior', 'conselheiro']),
      ocasiao: z.string(),
      temas: z.array(z.string()),
      estilo: z.enum(['formal', 'inspiracional', 'narrativo', 'educativo']),
      duracaoDesejada: z.enum(['curto', 'medio', 'longo']).optional(),
    }),
    outputSchema: z.object({
      discurso: z.object({
        metadados: z.object({
          ocasiao: z.string(),
          tipoOrador: z.string(),
          estilo: z.string(),
          duracaoEstimada: z.string(),
          temas: z.array(z.string()),
        }),
        blocos: z.array(z.object({
          id: z.string(),
          tipo: z.enum(['texto', 'indicacao', 'pausa', 'gesto', 'enfase']),
          conteudo: z.string(),
          duracao: z.number().optional(),
          observacoes: z.string().optional(),
        })),
      }),
    }),
    execute: async ({ context }) => {
      // Construir prompt contextualizado
      const prompt = buildDiscursoPrompt(context);
      
      // Chamar IA com schema estruturado
      const result = await env.DECO_CHAT_WORKSPACE_API.AI_GENERATE_OBJECT({
        messages: [{ role: 'user', content: prompt }],
        schema: discursoSchema,
        model: 'gpt-4o',
        temperature: 0.7,
      });
      
      return { discurso: result.object };
    },
  });
```

### Hooks do Frontend
```typescript
// view/src/hooks/useDiscurso.ts
export const useGenerateDiscurso = () => {
  return useMutation({
    mutationFn: (input: GenerateDiscursoInput) => 
      client.GENERATE_DISCURSO(input),
    onSuccess: (data) => {
      // Salvar discurso gerado no estado
      // Navegar para visualização
    },
  });
};
```

### Roteamento
```typescript
// view/src/routes/gerador.tsx
export default (parentRoute: RootRoute) =>
  createRoute({
    path: "/gerador",
    component: GeradorPage,
    beforeLoad: ({ context }) => {
      // Verificar autenticação
      if (!context.user) {
        throw redirect({ to: "/oauth/start" });
      }
    },
    getParentRoute: () => parentRoute,
  });
```

## Funcionalidades Avançadas

### 1. Histórico de Discursos
- **Salvamento Automático**: Todos os discursos gerados
- **Biblioteca Pessoal**: Organização por ocasião/tema
- **Reutilização**: Base para novos discursos

### 2. Técnicas de Oratória Integradas
- **Dicas Contextuais**: Sugestões baseadas no conteúdo
- **Exercícios de Aquecimento**: Preparação pré-discurso
- **Análise de Tempo**: Verificação de ritmo

### 3. Personalização Avançada
- **Aprendizado**: IA aprende com preferências do usuário
- **Templates Personalizados**: Estruturas recorrentes
- **Banco de Histórias**: Narrativas pessoais reutilizáveis

## Métricas e Analytics

### Uso da Ferramenta:
- **Discursos Gerados**: Quantidade por usuário/período
- **Estilos Populares**: Preferências por tipo de orador
- **Ocasiões Frequentes**: Demanda por tipo de evento
- **Taxa de Regeneração**: Satisfação com primeira geração

### Qualidade do Conteúdo:
- **Feedback do Usuário**: Avaliação dos discursos
- **Tempo de Edição**: Necessidade de ajustes
- **Reutilização**: Discursos salvos e reaproveitados

## Próximos Passos

### Fase 1 - MVP (Minimum Viable Product):
1. **Implementar formulário** de coleta de dados
2. **Criar tool de geração** com IA
3. **Desenvolver interface** de visualização básica
4. **Integrar autenticação** OAuth
5. **Testes básicos** de usabilidade

### Fase 2 - Funcionalidades Avançadas:
1. **Sistema de salvamento** de discursos
2. **Interface de edição** avançada
3. **Modo teleprompter** para apresentação
4. **Exportação** em múltiplos formatos
5. **Analytics** de uso

### Fase 3 - Otimizações:
1. **Aprendizado personalizado** da IA
2. **Templates customizáveis**
3. **Integração com calendário** para ocasiões
4. **Compartilhamento social**
5. **Versão mobile** otimizada

## Considerações Técnicas

### Performance:
- **Lazy Loading**: Carregar componentes sob demanda
- **Debounce**: Evitar chamadas excessivas à IA
- **Cache**: Armazenar resultados recentes
- **Otimização**: Minimizar re-renders

### Acessibilidade:
- **Navegação por teclado**: Todos os elementos
- **Screen readers**: Labels apropriados
- **Contraste**: Conformidade WCAG
- **Zoom**: Suporte até 200%

### Segurança:
- **Validação**: Input sanitization
- **Rate limiting**: Prevenir abuso da IA
- **Autenticação**: Verificação em todas as rotas
- **Dados sensíveis**: Não armazenar informações pessoais

---

Esta ferramenta de geração de discursos representará o ponto culminante da experiência educativa iniciada na landing page, oferecendo uma solução prática e personalizada para desenvolver habilidades de oratória no contexto da Ordem DeMolay.
