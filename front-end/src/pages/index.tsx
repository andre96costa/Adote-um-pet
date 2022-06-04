import type { NextPage } from 'next';
import Lista from '../ui/components/Lista/Lista';
import Titulo from '../ui/components/Titulo/Titulo';
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material';
import { useIndex } from "../data/hooks/pages/useIndex";

const Home: NextPage = () => {
  const { listaPets, petSelecinado, setPetSelecionado, email, setEmail, valor, setValor, mensagem, setMensagem, adotar} = useIndex();

  return (
    <div>
      <Titulo 
        titulo={"asdasdas"} 
        subTitulo={<span>
                    Como um pequeno valor mensal, <br /> você pode <strong>adotar um pet virtualmente</strong>.
                  </span>} 
      />

      <Lista 
        pets={listaPets}
        onSelect={(pet) => setPetSelecionado(pet)}
      />

      <Dialog 
        open={petSelecinado !== null}
        fullWidth
        PaperProps={{ sx: { padding: 5 } }}
        onClose={() => setPetSelecionado(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              label={'E-mail'}
              type={'email'}
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label={'Quantidade por mês'}
              type={'number'}
              fullWidth
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{mt: 5}}>
          <Button
            color={'secondary'}
            onClick={() => setPetSelecionado(null)}
          >
            Cancelar
          </Button>
          <Button
            variant={'contained'}
            onClick={() => adotar()}
          >
            Confirmar adoção
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar 
          open={mensagem.length > 0}
          message={mensagem}
          autoHideDuration={2500}
          onClose={() => setMensagem('')}
      />     
    </div>
  )
}

export default Home
