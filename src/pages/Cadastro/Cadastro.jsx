import './Cadastro.scss'

import Button from '@mui/material/Button';

function Cadastro() {
    return (
        <div id="Cadastro">
            <div id="container01">
                <div id="text01">
                    <p>Seja bem-vindo(a)!</p>
                </div>

                <div id="text02">
                    <p>Você está muito perto de fazer parte da família Girls Bank! Preencha os dados ao lado para se juntar à nós!</p>
                </div>

                <div id="text03">
                    <p>Já possui uma conta?</p>

                    <Button variant="outlined" sx={{ borderColor: "#fff", color: "#fff" }}>Login</Button>
                </div>
            </div>

            <div id="container02">

            </div>
        </div>
    )
}

export default Cadastro
