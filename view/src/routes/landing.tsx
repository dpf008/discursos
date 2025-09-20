import { createRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import { rootRoute } from "../main";

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-demolay-cream to-amber-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-demolay-gold rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-demolay-navy transform rotate-45"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-demolay-emerald transform -rotate-12"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 border border-demolay-burgundy rotate-45"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold text-demolay-navy mb-6 font-display">
          A Arte do
          <span className="block text-demolay-gold">Discurso</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-700 mb-8 font-body leading-relaxed max-w-3xl mx-auto">
          Desenvolva sua oratória com base nos fundamentos clássicos e valores atemporais. 
          Aprenda a criar discursos que inspiram, convencem e transformam.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-demolay-navy hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-none border-2 border-demolay-gold shadow-lg hover-lift"
          >
            Aprenda os Fundamentos
          </Button>
          <Link 
            to="/gerador"
            className="text-demolay-gold hover:text-demolay-burgundy font-semibold text-lg underline decoration-2 underline-offset-4 font-body transition-colors"
          >
            Gerar Discurso com IA →
          </Link>
        </div>
      </div>
    </section>
  );
}

// Good Speech Pillars Component
function GoodSpeechSection() {
  const pillars = [
    {
      title: "É Curto e Direto",
      description: "Um bom discurso vai direto ao ponto. Respeite o tempo da sua audiência e seja conciso. Cada palavra deve ter propósito."
    },
    {
      title: "Fala Algo Único",
      description: "Traga uma perspectiva nova, uma experiência pessoal ou um ângulo que ninguém mais abordou. Sua voz importa porque é única."
    },
    {
      title: "Conta uma História",
      description: "Histórias conectam. Elas tornam conceitos abstratos em experiências tangíveis que a audiência pode sentir e lembrar."
    },
    {
      title: "Usa Palavras Simples, mas Interessantes",
      description: "Clareza não significa simplicidade excessiva. Escolha palavras precisas que todos entendam, mas que criem imagens vívidas."
    },
    {
      title: "São Autênticos",
      description: "A autenticidade não pode ser fingida. Fale do que você realmente acredita e viveu. Sua sinceridade será percebida."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-demolay-navy mb-6 font-display">
            O que faz um bom discurso?
          </h2>
          <div className="w-24 h-1 bg-demolay-gold mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-body">
            Cinco pilares fundamentais que transformam palavras em mensagens poderosas
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="group">
              <div className="bg-slate-50 p-8 h-full border-l-4 border-demolay-gold hover:bg-demolay-cream transition-colors duration-300 hover-lift">
                {/* Pillar Number */}
                <div className="w-12 h-12 bg-demolay-navy text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {index + 1}
                </div>
                
                {/* Pillar Title */}
                <h3 className="text-xl font-bold text-demolay-navy mb-4 font-heading">
                  {pillar.title}
                </h3>
                
                {/* Pillar Description */}
                <p className="text-slate-700 leading-relaxed font-body">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Classical Foundations Component
function ClassicalFoundationsSection() {
  const foundations = [
    {
      name: "Ethos",
      subtitle: "Credibilidade",
      description: "Construa sua autoridade moral através da competência, caráter e boa vontade. Sua audiência precisa confiar em você antes de aceitar suas ideias.",
      icon: "🏛️"
    },
    {
      name: "Pathos",
      subtitle: "Emoção",
      description: "Conecte-se emocionalmente com sua audiência. Use histórias, metáforas e linguagem que desperte sentimentos e crie empatia.",
      icon: "❤️"
    },
    {
      name: "Logos",
      subtitle: "Lógica",
      description: "Estruture argumentos claros e convincentes. Use dados, evidências e raciocínio lógico para sustentar suas ideias de forma sólida.",
      icon: "🧠"
    }
  ];

  return (
    <section className="py-20 bg-demolay-navy text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Fundamentos Clássicos
          </h2>
          <div className="w-24 h-1 bg-demolay-gold mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-body">
            Os três pilares da retórica aristotélica que sustentam todo discurso eficaz há mais de 2.000 anos
          </p>
        </div>

        {/* Foundations Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {foundations.map((foundation, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-800 p-8 rounded-lg border-2 border-demolay-gold hover:bg-blue-700 transition-colors duration-300 hover-lift">
                {/* Icon */}
                <div className="text-6xl mb-6">{foundation.icon}</div>
                
                {/* Foundation Name */}
                <h3 className="text-3xl font-bold text-demolay-gold mb-2 font-display">
                  {foundation.name}
                </h3>
                
                {/* Subtitle */}
                <h4 className="text-lg font-semibold text-blue-200 mb-4 uppercase tracking-wider font-heading">
                  {foundation.subtitle}
                </h4>
                
                {/* Description */}
                <p className="text-blue-100 leading-relaxed font-body">
                  {foundation.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Training Section Component
function TrainingSection() {
  const trainingMethods = [
    {
      title: "Grave e Escute",
      description: "Grave seus discursos e ouça com atenção. Identifique pausas desnecessárias, vícios de linguagem e pontos de melhoria. A autoavaliação é fundamental.",
      tip: "Use o gravador do celular e ouça no fone de ouvido"
    },
    {
      title: "Pratique Regularmente",
      description: "Estabeleça uma rotina de prática. Mesmo 10 minutos por dia fazem diferença. Pratique na frente do espelho, com amigos ou sozinho.",
      tip: "Reserve 15 minutos toda manhã para praticar"
    },
    {
      title: "Colete Boas Histórias",
      description: "Mantenha um caderno de histórias pessoais interessantes. Anote experiências, aprendizados e momentos marcantes que podem ilustrar seus pontos.",
      tip: "Toda semana, escreva uma história nova que você viveu"
    },
    {
      title: "Busque Feedback",
      description: "Peça opiniões honestas de pessoas em quem confia. Feedback externo revela pontos cegos que não conseguimos ver sozinhos.",
      tip: "Forme um grupo de prática com amigos"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-demolay-navy mb-6 font-display">
            Como Treinar
          </h2>
          <div className="w-24 h-1 bg-demolay-gold mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-body">
            Métodos práticos e comprovados para desenvolver suas habilidades de oratória
          </p>
        </div>

        {/* Training Methods Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {trainingMethods.map((method, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-demolay-emerald hover-lift">
              {/* Method Title */}
              <h3 className="text-2xl font-bold text-demolay-navy mb-4 font-heading">
                {method.title}
              </h3>
              
              {/* Method Description */}
              <p className="text-slate-700 mb-4 leading-relaxed font-body">
                {method.description}
              </p>
              
              {/* Practical Tip */}
              <div className="bg-emerald-50 p-4 rounded border-l-2 border-demolay-emerald">
                <p className="text-emerald-800 font-semibold text-sm font-body">
                  💡 Dica prática: {method.tip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Genuine Stories Section Component
function GenuineStoriesSection() {
  return (
    <section className="py-20 bg-demolay-cream">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-demolay-navy mb-8 font-display">
          Histórias Genuínas
        </h2>
        <div className="w-24 h-1 bg-demolay-gold mx-auto mb-8"></div>
        
        {/* Main Content */}
        <div className="bg-white p-12 rounded-lg shadow-lg border-2 border-demolay-gold hover-lift">
          <div className="text-6xl mb-8">📖</div>
          
          <p className="text-2xl text-slate-700 mb-8 leading-relaxed font-display">
            "Os melhores discursos são histórias genuínas que você viveu."
          </p>
          
          <p className="text-lg text-slate-600 mb-8 leading-relaxed font-body">
            Suas experiências pessoais são seu maior tesouro como orador. Elas carregam autenticidade 
            que nenhuma técnica pode replicar. Busque sempre boas histórias em sua própria vida.
          </p>
          
          {/* Story Tips */}
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-slate-50 p-6 rounded">
              <h4 className="font-bold text-demolay-navy mb-3 font-heading">O que torna uma história boa?</h4>
              <ul className="text-slate-700 space-y-2 font-body">
                <li>• Tem um conflito ou desafio claro</li>
                <li>• Mostra transformação ou aprendizado</li>
                <li>• Conecta com a mensagem principal</li>
                <li>• É específica e detalhada</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-6 rounded">
              <h4 className="font-bold text-demolay-navy mb-3 font-heading">Onde encontrar histórias?</h4>
              <ul className="text-slate-700 space-y-2 font-body">
                <li>• Momentos de superação pessoal</li>
                <li>• Erros que viraram aprendizado</li>
                <li>• Encontros marcantes com pessoas</li>
                <li>• Situações que mudaram sua perspectiva</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section Component
function CTASection() {
  return (
    <section className="py-20 bg-demolay-navy text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display text-white">
          Pronto para Criar Seu Discurso?
        </h2>
        <div className="w-24 h-1 bg-demolay-gold mx-auto mb-8"></div>
        
        {/* Description */}
        <p className="text-xl text-white mb-12 leading-relaxed max-w-3xl mx-auto font-body opacity-90">
          Agora que você conhece os fundamentos, use nossa ferramenta de IA para gerar seu próximo discurso. 
          Ela aplicará todos esses princípios de forma personalizada para sua situação específica.
        </p>
        
        {/* CTA Button */}
        <Link to="/gerador">
          <Button 
            size="lg" 
            className="bg-demolay-gold hover:bg-yellow-500 text-demolay-navy px-12 py-6 text-xl font-bold rounded-none border-2 border-white shadow-2xl transform hover:scale-105 transition-all duration-200 font-heading"
          >
            Gerar Meu Discurso
            <span className="ml-3">🎤</span>
          </Button>
        </Link>
        
        {/* Additional Info */}
        <p className="text-white mt-8 text-lg font-body opacity-80">
          Ferramenta gratuita • Baseada nos fundamentos que você acabou de aprender
        </p>
      </div>
    </section>
  );
}

// Main Landing Component
function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <GoodSpeechSection />
      <ClassicalFoundationsSection />
      <TrainingSection />
      <GenuineStoriesSection />
      <CTASection />
    </div>
  );
}

// Route Definition
const landingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LandingPage,
});

export default landingRoute;
