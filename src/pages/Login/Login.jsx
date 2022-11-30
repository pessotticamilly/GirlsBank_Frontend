import './Login.scss';

import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import { useState } from "react";

// Fotos
import Logo from '../../assets/Logo.png'

// Icones
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';

function Login() {
    const [tipo, setTipo] = useState("password");

    function mostrarSenha() {
        if (tipo == "text") {
            setTipo("password");
        } else {
            setTipo("text");
        };
    };

    return (
        <div id="Login">
            <div id="container01">
                <Tooltip title="Voltar">
                    <IconButton sx={{ margin: "1rem 0 0 1rem" }} onClick={() => {
                        window.location.href = "/"
                    }} >
                        <ArrowBackIcon sx={{ color: "#999" }} />
                    </IconButton>
                </Tooltip>
            </div>

            <div id="container02">
                <img src={Logo} alt="Logo" />

                <TextField id="cpf" type="number" label="CPF" variant="outlined" sx={{ marginBottom: "2rem", width: "20%" }} />

                <TextField id="senha" type={tipo} label="Senha" variant="outlined" sx={{ marginBottom: "4rem", width: "20%" }} InputProps={{
                    endAdornment: (tipo == "text" ? <VisibilityOffRoundedIcon onClick={mostrarSenha} sx={{ color: "#666", cursor: "pointer" }} /> : <RemoveRedEyeRoundedIcon onClick={mostrarSenha} sx={{ color: "#666", cursor: "pointer" }} />)
                }} />

                <Button id="entrar" variant="contained" sx={{ marginBottom: "1rem" }} onClick={() => {
                    window.location.href = "/inicio"
                }}>Entrar</Button>

                <p>É novo por aqui?</p>
                <Link href="/cadastro" underline="hover">Cadastrar-se</Link>
            </div>
        </div>
    );
};

export default Login;