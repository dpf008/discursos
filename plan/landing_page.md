# Landing Page - Práticas Discursivas DeMolay

## Visão Geral
Uma landing page educativa focada no desenvolvimento de habilidades discursivas, com inspiração nos valores e tradições da Ordem DeMolay. O objetivo é educar sobre os fundamentos de um bom discurso e incentivar a prática, culminando na oferta de uma ferramenta de geração de discursos com IA.

## Estrutura da Página

### 1. Header/Hero Section
**Título Principal:** "A Arte do Discurso"
- Subtítulo inspirador sobre a importância da oratória na formação pessoal
- Visual com elementos decorativos clássicos (molduras douradas, ornamentos)
- CTA secundário: "Aprenda os Fundamentos"

### 2. Seção "O que faz um bom discurso?"
Baseada no desenho fornecido, esta seção apresentará os pilares de um discurso eficaz:

#### Características Fundamentais:
- **É curto e direto** - Explica a importância da concisão
- **Fala algo único** - Sobre originalidade e perspectiva pessoal
- **Conta uma história** - O poder narrativo na comunicação
- **Usa palavras simples, mas interessantes** - Clareza sem simplicidade excessiva
- **São autênticos** - A importância da genuinidade

### 3. Seção "Fundamentos Clássicos"
Inspirada nos ensinamentos aristotélicos e na tradição retórica:
- **Ethos** (Credibilidade) - Como construir autoridade moral
- **Pathos** (Emoção) - Conectar-se emocionalmente com a audiência
- **Logos** (Lógica) - Estruturar argumentos de forma convincente

### 4. Seção "Como Treinar"
Métodos práticos de desenvolvimento:
- **Gravação e autoavaliação** - Importância de ouvir a própria voz
- **Prática regular** - Estabelecer rotina de treinamento
- **Busca por boas histórias** - Como encontrar e desenvolver narrativas pessoais
- **Feedback construtivo** - Valor da crítica externa

### 5. Seção "Histórias Genuínas"
- Enfatizar que os melhores discursos vêm de experiências pessoais
- Guia para identificar e desenvolver histórias próprias
- Exemplos inspiradores (sem nomes específicos)

### 6. Call-to-Action Principal
**"Gere Seu Próximo Discurso"**
- Transição para a ferramenta de IA
- Botão destacado direcionando para `/gerador`
- Explicação breve sobre como a tecnologia pode auxiliar na prática

### 7. Footer
- Informações sobre a inspiração DeMolay
- Links para recursos adicionais
- Contato e créditos

## Design Visual

### Paleta de Cores
- **Primárias:** Azul marinho (#1B365D) e Dourado (#D4AF37)
- **Secundárias:** Creme (#F5F5DC) e Borgonha (#800020)
- **Acentos:** Verde esmeralda (#50C878)

### Tipografia
```css
/* Títulos principais */
font-family: 'Playfair Display', 'Times New Roman', serif;
font-weight: 700;

/* Subtítulos */
font-family: 'Cinzel', serif;
text-transform: uppercase;
letter-spacing: 2px;

/* Corpo do texto */
font-family: 'Source Serif Pro', 'Georgia', serif;
```

### Elementos Visuais
- **Ornamentos:** Bordas decorativas com padrões geométricos clássicos
- **Ícones:** Estrelas de sete pontas, símbolos de sabedoria (sem brasões literais)
- **Ilustrações:** Estilo gravura com traços finos e detalhados
- **Molduras:** Elementos decorativos dourados emoldurando seções importantes

### Layout
- **Grid assimétrico** com equilíbrio visual
- **Seções alternadas** entre fundo claro e escuro
- **Espaçamento generoso** para legibilidade
- **Elementos de separação** ornamentais entre seções

## Componentes Técnicos

### Estrutura React
```
/routes/landing.tsx
/components/landing/
  ├── HeroSection.tsx
  ├── WhatMakesGoodSpeech.tsx
  ├── ClassicalFoundations.tsx
  ├── HowToTrain.tsx
  ├── GenuineStories.tsx
  ├── CTASection.tsx
  └── LandingFooter.tsx
```

### Animações e Interatividade
- **Scroll reveal** para elementos aparecerem gradualmente
- **Hover effects** em botões e elementos interativos
- **Parallax sutil** em elementos decorativos
- **Transições suaves** entre seções

### Responsividade
- **Mobile-first** approach
- **Breakpoints:** 320px, 768px, 1024px, 1440px
- **Adaptação de ornamentos** para telas menores
- **Tipografia escalável** mantendo hierarquia

## Conteúdo Detalhado

### Textos Inspiracionais
- Citações sobre oratória e liderança
- Referências históricas à importância do discurso
- Conexão com valores de fraternidade e desenvolvimento pessoal

### Recursos Educacionais
- **Dicas práticas** de postura e dicção
- **Exercícios de aquecimento** vocal
- **Estruturas de discurso** comprovadas
- **Técnicas de memorização**

### Chamadas para Ação
- **Primária:** "Gere Seu Discurso" (direcionando para /gerador)
- **Secundárias:** "Baixe o Guia", "Pratique Agora", "Saiba Mais"

## SEO e Performance

### Palavras-chave
- "como fazer um bom discurso"
- "oratória DeMolay"
- "técnicas de discurso"
- "treinar falar em público"
- "gerador de discurso"

### Meta Tags
```html
<title>A Arte do Discurso | Desenvolva sua Oratória</title>
<meta name="description" content="Aprenda os fundamentos de um bom discurso com base nos valores clássicos. Descubra técnicas, pratique e gere seu próximo discurso com IA.">
```

### Performance
- **Otimização de imagens** (WebP, lazy loading)
- **CSS crítico** inline
- **JavaScript assíncrono** para animações
- **Fonts preloading** para tipografia customizada

## Integração com /gerador

### Transição Suave
- Preparar o usuário sobre o que encontrará na ferramenta
- Explicar como os conceitos aprendidos se aplicam na geração
- Manter consistência visual entre as páginas

### Dados de Contexto
- Passar informações sobre o tipo de discurso desejado
- Manter preferências de estilo e tom
- Histórico de aprendizado do usuário

## Métricas de Sucesso

### Engajamento
- Tempo na página
- Scroll depth
- Cliques nos CTAs
- Taxa de conversão para /gerador

### Educacional
- Completude da leitura das seções
- Interação com elementos educativos
- Retorno de usuários para revisitar conteúdo

## Próximos Passos

1. **Criação dos componentes** React base
2. **Implementação do design system** com cores e tipografia
3. **Desenvolvimento das seções** seguindo a estrutura definida
4. **Integração das animações** e elementos interativos
5. **Otimização** de performance e SEO
6. **Testes** de usabilidade e responsividade
7. **Preparação da transição** para /gerador

---

Esta landing page servirá como uma introdução educativa e inspiradora ao mundo da oratória, preparando os usuários para utilizarem a ferramenta de geração de discursos com uma base sólida de conhecimento e motivação.
