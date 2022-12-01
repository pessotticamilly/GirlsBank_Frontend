import './Cadastro.scss';

import axios from 'axios';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';

// Icones
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';

function Cadastro() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [tipo, setTipo] = useState("password");

    function mostrarSenha() {
        if (tipo == "text") {
            setTipo("password");
        } else {
            setTipo("text");
        };
    };

    let pessoa = {
        nomeCompleto: nome,
        cpf: cpf,
        telefone: telefone,
        email: email,
        senha: senha
    }

    async function cadastrar() {
        try {
            const response = await axios.post("http://localhost:8080/girlsbank/pessoa/cadastrar", pessoa);
            if (response.status == 200) {
                window.location.href = "/login";
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div id="Cadastro">
            <div id="container01">
                <div id="box01">
                    <Tooltip title="Voltar">
                        <IconButton sx={{ margin: "1rem 0 0 1rem" }} onClick={() => {
                            window.location.href = "/"
                        }} >
                            <ArrowBackIcon sx={{ color: "#fff" }} />
                        </IconButton>
                    </Tooltip>
                </div>

                <div id="box02">
                    <div id="text01">
                        <p>Seja bem-vindo(a)!</p>
                    </div>

                    <div id="text02">
                        <p>Você está muito perto de fazer parte da família Girls Bank! Preencha os dados ao lado para se juntar à nós.</p>
                    </div>

                    <div id="text03">
                        <p>Já possui uma conta?</p>

                        <Button variant="outlined" sx={{ border: "1px solid #fff", color: "#fff", "&:hover": { border: "1px solid #fff", backgroundColor: "#ffffff25" } }} onClick={() => {
                            window.location.href = "login";
                        }}>Login</Button>
                    </div>
                </div>
            </div>

            <div id="container02">
                <div id="text01">
                    <p>Criar uma conta</p>
                </div>

                <div id="box01">
                    <form>
                        <TextField id="nomeCompleto" type="text" label="Nome Completo" required variant="outlined" sx={{ marginBottom: "2rem", width: "50%" }} onChange={(e) => { setNome(e.target.value) }} />

                        <TextField id="cpf" type="number" label="CPF" required variant="outlined" sx={{ marginBottom: "2rem", width: "50%" }} onChange={(e) => { setCpf(e.target.value) }} />

                        <TextField id="email" type="email" label="Email" required variant="outlined" sx={{ marginBottom: "2rem", width: "50%" }} onChange={(e) => { setEmail(e.target.value) }} />

                        <TextField id="telefone" type="text" label="Telefone" required variant="outlined" sx={{ marginBottom: "2rem", width: "50%" }} onChange={(e) => { setTelefone(e.target.value) }} />

                        <TextField id="senha" type={tipo} label="Senha" required variant="outlined" sx={{ marginBottom: "4rem", width: "50%" }} onChange={(e) => { setSenha(e.target.value) }} InputProps={{
                            endAdornment: (tipo == "text" ? <VisibilityOffRoundedIcon onClick={mostrarSenha} sx={{ color: "#666", cursor: "pointer" }} /> : <RemoveRedEyeRoundedIcon onClick={mostrarSenha} sx={{ color: "#666", cursor: "pointer" }} />)
                        }} />

                        <div id="box02">
                            <Button type="submit" variant="contained" onClick={() => cadastrar()}>Confirmar</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Cadastro;