import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import API from '../utils/api';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const loginValidator = yup
  .object()
  .shape({
    email: yup.string()
      .email('Campo deve ser um e-mail')
      .required('E-mail obrigatório'),
    password: yup.string()
      .min(6, "No mínimo 6 dígitos")
      .required("Campo Obrigatório"),
  })
  .required();

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginValidator),
  });

  async function submit(values) {
    try {
      const { data } = await API.post('login', values);
      localStorage.setItem('token', data.token);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit(submit)} sx={{ mt: 1 }}>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <TextField
        {...register('email')}
        margin="normal"
        required
        fullWidth
        id="email"
        label="E-mail"
        name="email"
        autoComplete="email"
        autoFocus
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        {...register('password')}
        margin="normal"
        required
        fullWidth
        name="password"
        label="Senha"
        type="password"
        id="password"
        autoComplete="current-password"
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Entrar
      </Button>
    </Box>
  );
}

export default Login;
