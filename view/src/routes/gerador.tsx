import { createRoute, redirect } from "@tanstack/react-router";
import { rootRoute } from "../main";
import { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Chip,
  Grid,
  FormControl,
  FormLabel,
  Divider,
  CircularProgress,
  Alert,
} from "@mui/material";
import {
  AccountCircle,
  Event,
  Topic,
  Style,
  AutoAwesome,
} from "@mui/icons-material";
import { useAuth } from "../lib/hooks";

// Tipos para o formulário
interface FormData {
  tipoOrador: string;
  ocasiao: string;
  temas: string[];
  temasCustom: string;
  estilo: string;
  duracaoDesejada: string;
}

// Componente principal do gerador
function GeradorPage() {
  const { user, isLoading: authLoading } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    tipoOrador: "",
    ocasiao: "",
    temas: [],
    temasCustom: "",
    estilo: "",
    duracaoDesejada: "medio",
  });
  const [isGenerating, setIsGenerating] = useState(false);

  // Verificar se usuário está autenticado
  if (authLoading) {
    return (
      <Container maxWidth="md" sx={{ py: 4, textAlign: "center" }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Verificando autenticação...
        </Typography>
      </Container>
    );
  }

  if (!user) {
    // Redirecionar para OAuth se não estiver logado
    window.location.href = "/oauth/start";
    return null;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Paper elevation={0} sx={{ p: 4, mb: 4, bgcolor: "primary.main", color: "white" }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Gerador de Discursos
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9 }}>
          Crie discursos personalizados com Inteligência Artificial
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        {/* Seção: Você é */}
        <Grid item xs={12}>
          <SectionCard
            icon={<AccountCircle />}
            title="Você é"
            description="Selecione seu perfil para personalizar o discurso"
          >
            <FormControl component="fieldset">
              <RadioGroup
                value={formData.tipoOrador}
                onChange={(e) => setFormData({ ...formData, tipoOrador: e.target.value })}
                row
              >
                <Grid container spacing={2}>
                  {tiposOrador.map((tipo) => (
                    <Grid item xs={12} sm={6} key={tipo.value}>
                      <Card 
                        variant={formData.tipoOrador === tipo.value ? "outlined" : "elevation"}
                        sx={{ 
                          cursor: "pointer",
                          border: formData.tipoOrador === tipo.value ? 2 : 1,
                          borderColor: formData.tipoOrador === tipo.value ? "primary.main" : "divider"
                        }}
                        onClick={() => setFormData({ ...formData, tipoOrador: tipo.value })}
                      >
                        <CardContent>
                          <FormControlLabel
                            value={tipo.value}
                            control={<Radio />}
                            label={
                              <Box>
                                <Typography variant="subtitle1" fontWeight="bold">
                                  {tipo.label}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {tipo.description}
                                </Typography>
                              </Box>
                            }
                          />
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </RadioGroup>
            </FormControl>
          </SectionCard>
        </Grid>

        {/* Seção: Ocasião */}
        <Grid item xs={12}>
          <SectionCard
            icon={<Event />}
            title="Qual ocasião do discurso?"
            description="Escolha o tipo de evento para adequar o tom"
          >
            <FormControl component="fieldset" fullWidth>
              <RadioGroup
                value={formData.ocasiao}
                onChange={(e) => setFormData({ ...formData, ocasiao: e.target.value })}
              >
                <Grid container spacing={2}>
                  {ocasioes.map((ocasiao) => (
                    <Grid item xs={12} sm={6} md={4} key={ocasiao}>
                      <Card 
                        variant={formData.ocasiao === ocasiao ? "outlined" : "elevation"}
                        sx={{ 
                          cursor: "pointer",
                          border: formData.ocasiao === ocasiao ? 2 : 1,
                          borderColor: formData.ocasiao === ocasiao ? "primary.main" : "divider"
                        }}
                        onClick={() => setFormData({ ...formData, ocasiao })}
                      >
                        <CardContent>
                          <FormControlLabel
                            value={ocasiao}
                            control={<Radio />}
                            label={ocasiao}
                          />
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </RadioGroup>
            </FormControl>
          </SectionCard>
        </Grid>

        {/* Seção: Temas */}
        <Grid item xs={12}>
          <SectionCard
            icon={<Topic />}
            title="Assuntos"
            description="Defina os temas que gostaria de abordar"
          >
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Ex: liderança, fraternidade, valores morais, desenvolvimento pessoal..."
              value={formData.temasCustom}
              onChange={(e) => setFormData({ ...formData, temasCustom: e.target.value })}
              sx={{ mb: 2 }}
            />
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Ou escolha temas sugeridos:
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {temasPopulares.map((tema) => (
                <Chip
                  key={tema}
                  label={tema}
                  clickable
                  color={formData.temas.includes(tema) ? "primary" : "default"}
                  onClick={() => toggleTema(tema, formData, setFormData)}
                />
              ))}
            </Box>
          </SectionCard>
        </Grid>

        {/* Seção: Estilo */}
        <Grid item xs={12}>
          <SectionCard
            icon={<Style />}
            title="Estilo do Discurso"
            description="Escolha o tom que melhor se adequa à ocasião"
          >
            <Grid container spacing={2}>
              {estilosDiscurso.map((estilo) => (
                <Grid item xs={12} sm={6} key={estilo.value}>
                  <Card 
                    variant={formData.estilo === estilo.value ? "outlined" : "elevation"}
                    sx={{ 
                      cursor: "pointer",
                      border: formData.estilo === estilo.value ? 2 : 1,
                      borderColor: formData.estilo === estilo.value ? "primary.main" : "divider"
                    }}
                    onClick={() => setFormData({ ...formData, estilo: estilo.value })}
                  >
                    <CardContent>
                      <FormControlLabel
                        value={estilo.value}
                        control={<Radio />}
                        label={
                          <Box>
                            <Typography variant="subtitle1" fontWeight="bold">
                              {estilo.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                              {estilo.description}
                            </Typography>
                            <Typography variant="body2" sx={{ fontStyle: "italic", color: "primary.main" }}>
                              "{estilo.example}"
                            </Typography>
                          </Box>
                        }
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </SectionCard>
        </Grid>

        {/* Botão Gerar */}
        <Grid item xs={12}>
          <Paper sx={{ p: 4, textAlign: "center" }}>
            <Button
              variant="contained"
              size="large"
              startIcon={isGenerating ? <CircularProgress size={20} /> : <AutoAwesome />}
              disabled={!isFormValid(formData) || isGenerating}
              onClick={() => handleGenerate(formData, setIsGenerating)}
              sx={{ px: 6, py: 2, fontSize: "1.1rem" }}
            >
              {isGenerating ? "Gerando..." : "Gerar Discurso com IA"}
            </Button>
            
            {!isFormValid(formData) && (
              <Alert severity="info" sx={{ mt: 2, maxWidth: 400, mx: "auto" }}>
                Preencha todos os campos obrigatórios para gerar seu discurso
              </Alert>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

// Componente para seções do formulário
interface SectionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
}

function SectionCard({ icon, title, description, children }: SectionCardProps) {
  return (
    <Paper elevation={1} sx={{ p: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Box sx={{ color: "primary.main", mr: 2 }}>
          {icon}
        </Box>
        <Box>
          <Typography variant="h5" component="h2" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ mb: 3 }} />
      {children}
    </Paper>
  );
}

// Dados das opções
const tiposOrador = [
  {
    value: "demolay-ativo",
    label: "DeMolay Ativo",
    description: "Jovem membro da Ordem DeMolay"
  },
  {
    value: "macom",
    label: "Maçom",
    description: "Membro da Maçonaria"
  },
  {
    value: "senior",
    label: "Senior DeMolay",
    description: "Ex-DeMolay adulto"
  },
  {
    value: "conselheiro",
    label: "Membro do Conselho Consultivo",
    description: "Orientador da Ordem DeMolay"
  }
];

const ocasioes = [
  "Posse de nova gestão",
  "Iniciação",
  "Elevação", 
  "Cerimônia Pública",
  "Dia das Mães",
  "Dia dos Pais",
  "Reunião Ordinária",
  "Assembleia",
  "Confraternização",
  "Evento beneficente",
  "Aniversário do Capítulo",
  "Apresentação pública"
];

const temasPopulares = [
  "Liderança",
  "Fraternidade", 
  "Valores morais",
  "Desenvolvimento pessoal",
  "Tradição",
  "Juventude",
  "Responsabilidade",
  "Caráter",
  "Amizade",
  "Honra",
  "Sabedoria",
  "Coragem"
];

const estilosDiscurso = [
  {
    value: "formal",
    name: "O Clássico",
    description: "Formal e solene, ideal para cerimônias oficiais",
    example: "Respeitáveis irmãos, é com grande honra que me dirijo a vós nesta ocasião solene..."
  },
  {
    value: "inspiracional", 
    name: "O Inspirador",
    description: "Motivacional e envolvente, desperta emoção e ação",
    example: "Imaginem por um momento o poder que cada um de vocês possui para transformar..."
  },
  {
    value: "narrativo",
    name: "O Contador de Histórias", 
    description: "Pessoal e narrativo, conecta através de experiências",
    example: "Deixem-me contar sobre um jovem que chegou aqui com medo, mas saiu transformado..."
  },
  {
    value: "educativo",
    name: "O Mestre",
    description: "Educativo e reflexivo, transmite conhecimento e sabedoria",
    example: "Hoje vamos explorar um dos pilares fundamentais da nossa Ordem..."
  }
];

// Funções auxiliares
function toggleTema(tema: string, formData: FormData, setFormData: (data: FormData) => void) {
  const newTemas = formData.temas.includes(tema)
    ? formData.temas.filter(t => t !== tema)
    : [...formData.temas, tema];
  
  setFormData({ ...formData, temas: newTemas });
}

function isFormValid(formData: FormData): boolean {
  return !!(
    formData.tipoOrador &&
    formData.ocasiao &&
    formData.estilo &&
    (formData.temas.length > 0 || formData.temasCustom.trim())
  );
}

function handleGenerate(formData: FormData, setIsGenerating: (loading: boolean) => void) {
  setIsGenerating(true);
  
  // TODO: Implementar chamada para o hook de geração
  console.log("Gerando discurso com:", formData);
  
  // Simular geração por enquanto
  setTimeout(() => {
    setIsGenerating(false);
    alert("Discurso gerado! (placeholder - implementar visualização)");
  }, 3000);
}

// Definição da rota
const geradorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gerador",
  component: GeradorPage,
  beforeLoad: async ({ context }) => {
    // Verificação de autenticação será feita no componente
    // para permitir melhor UX com loading states
    return {};
  },
});

export default geradorRoute;