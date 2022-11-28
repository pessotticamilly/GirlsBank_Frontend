import './Login.scss';

import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';

function Login() {
    return (
        <div id="Login">
            <TextField id="cpf" type="number" label="CPF" variant="outlined" sx={{ marginBottom: "2rem", width: "25%" }} />

            <TextField id="senha" type="password" label="Senha" variant="outlined" sx={{ marginBottom: "4rem", width: "25%" }} />

            <Button id="entrar" variant="contained" sx={{ marginBottom: "1rem" }}>Entrar</Button>

            <p>É novo por aqui?</p>
            <Link href="/cadastro" underline="hover">Cadastrar-se</Link>
        </div>
    )
}

export default Login
