import { Box, TextField, Button, Typography } from '@mui/material'
import axios from 'axios'
function Register() {
  const handleRegister = (event) => {
    event.preventDefault()
    let data = {}
    axios.post('/create', data).then((resp) => {
      console.log("esse é a resposta",resp)
    })
  } 

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography variant="h5" component="h5" gutterBottom>
        REGISTER
      </Typography>
      <Box
        component="form"
        onSubmit={handleRegister}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: 400,
          borderBottom: 1,
          borderColor: 'divider'
        }}
      >
        <TextField label="Nome" variant="outlined" margin="normal" required />
        <TextField label="E-mail" variant="outlined" margin="normal" required />
        <TextField label="Senha" type="password" variant="outlined" margin="normal" required />
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, bgcolor: 'primary.main' }}>
          Registrar
        </Button>
      </Box>
    </Box>
  )
}

export default Register
