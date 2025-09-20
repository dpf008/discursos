# A Arte do Discurso

Uma plataforma educativa para desenvolvimento de habilidades de oratória, inspirada nos valores e tradições clássicas da Ordem DeMolay.

Aprenda os fundamentos de um bom discurso através de uma experiência web interativa que combina ensinamentos aristotélicos com tecnologia moderna, incluindo geração de discursos assistida por IA.

## 📝 Development History

This repository uses [Specstory](https://specstory.com/) to track the history of
prompts that were used to code this repo. You can inspect the complete
development history in the [`.specstory/`](.specstory/) folder.

## ✨ Características

- **📚 Conteúdo Educativo**: Fundamentos clássicos de oratória baseados em Aristóteles
- **🎯 Cinco Pilares**: Aprenda os elementos essenciais de um bom discurso
- **💡 Dicas Práticas**: Métodos comprovados de treinamento e desenvolvimento
- **📖 Histórias Genuínas**: Importância da autenticidade na comunicação
- **🤖 Gerador de Discursos IA**: Ferramenta completa de geração personalizada
  - Interface intuitiva com Material UI
  - Contextualização por tipo de orador (DeMolay Ativo, Maçom, Senior, Conselheiro)
  - Seleção de ocasião e temas
  - 4 estilos diferentes de discurso
  - Output estruturado em blocos com indicações para o orador
  - Visualização em modo leitura e apresentação
- **🎨 Design Clássico**: Interface inspirada no estilo DeMolay com tipografia elegante
- **📱 Responsivo**: Experiência otimizada para desktop e mobile

## 🚀 Como Usar

### Pré-requisitos

- Node.js ≥22.0.0
- [Deco CLI](https://deco.chat): `npm i -g deco-cli`

### Configuração

```bash
# Instalar dependências
npm install

# Configurar a aplicação
npm run configure

# Iniciar servidor de desenvolvimento
npm run dev
```

O servidor iniciará em `http://localhost:8787` servindo tanto os endpoints MCP quanto a interface React.

## 📖 Conteúdo Educativo

### Os Cinco Pilares de um Bom Discurso

1. **É Curto e Direto** - Respeite o tempo da audiência
2. **Fala Algo Único** - Traga uma perspectiva nova
3. **Conta uma História** - Conecte através de narrativas
4. **Usa Palavras Simples, mas Interessantes** - Clareza com impacto
5. **São Autênticos** - A sinceridade é percebida

### Fundamentos Clássicos (Aristóteles)

- **Ethos** (Credibilidade) - Construa autoridade moral
- **Pathos** (Emoção) - Conecte-se emocionalmente
- **Logos** (Lógica) - Estruture argumentos convincentes

## 🎯 Estrutura da Aplicação

### Landing Page (/)
- **Hero Section**: Apresentação da "Arte do Discurso"
- **Cinco Pilares**: Fundamentos de um bom discurso
- **Fundamentos Clássicos**: Ethos, Pathos e Logos
- **Como Treinar**: Métodos práticos de desenvolvimento
- **Histórias Genuínas**: Importância da autenticidade
- **CTA**: Direcionamento para o gerador de discursos

### Gerador (/gerador) - Em Desenvolvimento
- Ferramenta de IA para criação de discursos personalizados
- Aplicação dos princípios aprendidos na landing page
- Interface intuitiva para diferentes tipos de ocasião

## 🎨 Design System

### Paleta de Cores (DeMolay)
- **Azul Marinho** (#1B365D) - Cor principal
- **Dourado** (#D4AF37) - Acentos e destaques
- **Creme** (#F5F5DC) - Fundos suaves
- **Borgonha** (#800020) - Detalhes especiais
- **Verde Esmeralda** (#50C878) - Elementos de apoio

### Tipografia
- **Títulos**: Playfair Display (elegante e clássica)
- **Subtítulos**: Cinzel (caps pequenas, espaçamento amplo)
- **Corpo**: Source Serif Pro (legível e profissional)

## 🛠️ Comandos de Desenvolvimento

- **`npm run dev`** - Iniciar desenvolvimento com hot reload
- **`npm run gen`** - Gerar tipos para integrações externas
- **`npm run gen:self`** - Gerar tipos para ferramentas próprias
- **`npm run deploy`** - Deploy para produção

## 🎓 Próximos Passos

1. **Implementar Gerador de IA**: Ferramenta para criação de discursos
2. **Adicionar Mais Conteúdo**: Exercícios práticos e exemplos
3. **Sistema de Usuários**: Salvamento de progresso e discursos
4. **Biblioteca de Recursos**: Livros, artigos e materiais complementares
5. **Comunidade**: Espaço para compartilhamento e feedback

---

**Desenvolvido com os valores e tradições da Ordem DeMolay 🏛️**
