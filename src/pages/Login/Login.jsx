import './Login.scss';

import axios from "axios";
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
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const [tipo, setTipo] = useState("password");

    function mostrarSenha() {
        if (tipo == "text") {
            setTipo("password");
        } else {
            setTipo("text");
        };
    };

    const pessoa = {
        cpf: cpf,
        senha: senha
    }

    async function entrar() {
        try {
            let response = await axios.post("http://localhost:8080/girlsbank/pessoa/login", pessoa)
            if (response.status == 200) {
                localStorage.setItem("PESSOA", JSON.stringify(response.data))
                window.location.href = "/inicio"
            }
        } catch (error) {
            console.log(error);
        }
    }

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

                <form>
                    <TextField id="cpf" type="number" label="CPF" required variant="outlined" sx={{ marginBottom: "2rem", width: "20%" }} onChange={(e) => { setCpf(e.target.value) }} />

                    <TextField id="senha" type={tipo} label="Senha" required variant="outlined" sx={{ marginBottom: "4rem", width: "20%" }} onChange={(e) => { setSenha(e.target.value) }} InputProps={{
                        endAdornment: (tipo == "text" ? <VisibilityOffRoundedIcon onClick={mostrarSenha} sx={{ color: "#666", cursor: "pointer" }} /> : <RemoveRedEyeRoundedIcon onClick={mostrarSenha} sx={{ color: "#666", cursor: "pointer" }} />)
                    }} />

                    <Button id="entrar" type="submit" variant="contained" sx={{ marginBottom: "1rem" }} onClick={() => entrar()}>Entrar</Button>
                </form>

                <p>É novo por aqui?</p>
                <Link href="/cadastro" underline="hover">Cadastrar-se</Link>
            </div>
        </div>
    );
};

export default Login;