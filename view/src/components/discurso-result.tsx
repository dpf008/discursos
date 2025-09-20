import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Divider,
  Paper,
  IconButton,
  Button,
  Alert,
} from "@mui/material";
import {
  Download,
  Share,
  Edit,
  AccessTime,
} from "@mui/icons-material";
import { useState } from "react";

// Tipos para o discurso gerado
interface BlocoDiscurso {
  id: string;
  tipo: 'texto' | 'indicacao' | 'pausa' | 'gesto' | 'enfase';
  conteudo: string;
  duracao?: number;
  observacoes?: string;
}

interface DiscursoGerado {
  metadados: {
    ocasiao: string;
    tipoOrador: string;
    estilo: string;
    duracaoEstimada: string;
    temas: string[];
  };
  blocos: BlocoDiscurso[];
}

interface DiscursoResultProps {
  discurso: DiscursoGerado;
  onEdit?: () => void;
  onRegenerate?: () => void;
}

export function DiscursoResult({ discurso, onEdit, onRegenerate }: DiscursoResultProps) {
  const [viewMode, setViewMode] = useState<'reading' | 'presentation'>('reading');
  const [currentBlock, setCurrentBlock] = useState(0);

  return (
    <Box sx={{ maxWidth: '4xl', mx: 'auto', p: 4 }}>
      {/* Header com metadados */}
      <Card elevation={2} sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom color="primary">
            Seu Discurso Personalizado
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            <Chip 
              icon={<AccessTime />} 
              label={discurso.metadados.duracaoEstimada}
              color="primary"
              variant="outlined"
            />
            <Chip label={discurso.metadados.ocasiao} color="secondary" />
            <Chip label={discurso.metadados.estilo} />
          </Box>
          
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <strong>Temas:</strong> {discurso.metadados.temas.join(', ')}
          </Typography>
          
          <Box sx={{ mt: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant={viewMode === 'reading' ? 'contained' : 'outlined'}
              onClick={() => setViewMode('reading')}
            >
              Modo Leitura
            </Button>
            <Button
              variant={viewMode === 'presentation' ? 'contained' : 'outlined'}
              onClick={() => setViewMode('presentation')}
            >
              Modo Apresentação
            </Button>
            
            <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
            
            <IconButton color="primary">
              <Download />
            </IconButton>
            <IconButton color="primary">
              <Share />
            </IconButton>
            {onEdit && (
              <Button startIcon={<Edit />} onClick={onEdit}>
                Editar
              </Button>
            )}
            {onRegenerate && (
              <Button variant="outlined" onClick={onRegenerate}>
                Regenerar
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>

      {/* Conteúdo do discurso */}
      {viewMode === 'reading' ? (
        <ReadingMode blocos={discurso.blocos} />
      ) : (
        <PresentationMode 
          blocos={discurso.blocos}
          currentBlock={currentBlock}
          onBlockChange={setCurrentBlock}
        />
      )}
    </Box>
  );
}

// Modo de leitura - texto corrido
function ReadingMode({ blocos }: { blocos: BlocoDiscurso[] }) {
  return (
    <Paper elevation={1} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Discurso Completo
      </Typography>
      
      <Box sx={{ lineHeight: 2, fontSize: '1.1rem' }}>
        {blocos.map((bloco) => (
          <Box key={bloco.id} sx={{ mb: 2 }}>
            {bloco.tipo === 'texto' ? (
              <Typography variant="body1" paragraph sx={{ textIndent: '2em' }}>
                {bloco.conteudo}
              </Typography>
            ) : (
              <Alert 
                severity={getBlocoSeverity(bloco.tipo)}
                variant="outlined"
                sx={{ my: 1 }}
              >
                <strong>{getBlocoTypeLabel(bloco.tipo)}:</strong> {bloco.conteudo}
                {bloco.observacoes && (
                  <Typography variant="caption" display="block" sx={{ mt: 0.5 }}>
                    {bloco.observacoes}
                  </Typography>
                )}
              </Alert>
            )}
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

// Modo apresentação - blocos individuais
function PresentationMode({ 
  blocos, 
  currentBlock, 
  onBlockChange 
}: { 
  blocos: BlocoDiscurso[];
  currentBlock: number;
  onBlockChange: (index: number) => void;
}) {
  const bloco = blocos[currentBlock];
  
  return (
    <Box>
      {/* Controles de navegação */}
      <Paper elevation={1} sx={{ p: 2, mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          disabled={currentBlock === 0}
          onClick={() => onBlockChange(currentBlock - 1)}
        >
          Anterior
        </Button>
        
        <Typography variant="body2" sx={{ flex: 1, textAlign: 'center' }}>
          Bloco {currentBlock + 1} de {blocos.length}
        </Typography>
        
        <Button
          disabled={currentBlock === blocos.length - 1}
          onClick={() => onBlockChange(currentBlock + 1)}
        >
          Próximo
        </Button>
      </Paper>

      {/* Bloco atual */}
      <Card elevation={2} sx={{ minHeight: 400, p: 4 }}>
        <CardContent>
          {bloco.tipo === 'texto' ? (
            <Typography 
              variant="h6" 
              sx={{ 
                lineHeight: 2,
                fontSize: '1.3rem',
                textAlign: 'justify'
              }}
            >
              {bloco.conteudo}
            </Typography>
          ) : (
            <Alert severity={getBlocoSeverity(bloco.tipo)} sx={{ fontSize: '1.1rem' }}>
              <Typography variant="h6" gutterBottom>
                {getBlocoTypeLabel(bloco.tipo)}
              </Typography>
              <Typography variant="body1">
                {bloco.conteudo}
              </Typography>
              {bloco.observacoes && (
                <Typography variant="body2" sx={{ mt: 1, fontStyle: 'italic' }}>
                  {bloco.observacoes}
                </Typography>
              )}
            </Alert>
          )}
          
          {bloco.duracao && (
            <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
              Duração estimada: {bloco.duracao}s
            </Typography>
          )}
        </CardContent>
      </Card>

      {/* Indicador de progresso */}
      <Box sx={{ mt: 3, display: 'flex', gap: 0.5 }}>
        {blocos.map((_, blockIndex) => (
          <Box
            key={blockIndex}
            sx={{
              height: 4,
              flex: 1,
              bgcolor: blockIndex <= currentBlock ? 'primary.main' : 'grey.300',
              borderRadius: 2,
              cursor: 'pointer',
            }}
            onClick={() => onBlockChange(blockIndex)}
          />
        ))}
      </Box>
    </Box>
  );
}

// Funções auxiliares
function getBlocoSeverity(tipo: string) {
  switch (tipo) {
    case 'indicacao': return 'info';
    case 'pausa': return 'warning';
    case 'gesto': return 'success';
    case 'enfase': return 'error';
    default: return 'info';
  }
}

function getBlocoTypeLabel(tipo: string) {
  switch (tipo) {
    case 'indicacao': return 'Indicação';
    case 'pausa': return 'Pausa';
    case 'gesto': return 'Gesto';
    case 'enfase': return 'Ênfase';
    default: return tipo;
  }
}
