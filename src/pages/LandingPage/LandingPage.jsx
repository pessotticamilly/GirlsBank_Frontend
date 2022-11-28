import './LandingPage.scss'

import Button from '@mui/material/Button';
import FundoLandingPage from '../../assets/FundoLandingPage.jpg';
import Logo from '../../assets/Logo.png';

function LandingPage() {
    return (
        <div id="LandingPage">
            <header>
                <div id="logo">
                    <img src={Logo} alt="Logo" />
                </div>

                <div id="nav">
                    <a id="localizacao" href="/">Início</a>
                    <a href="#">Contato</a>
                    <a href="#">Sobre nós</a>
                    <a href="#">Endereço</a>
                </div>
            </header>

            <main>
                <div id="container01">
                    <div id="box">
                        <div id="text01">
                            <p>Bem-vindo(a) ao</p>
                        </div>

                        <div id="text02">
                            <p>GIRLS BANK</p>
                        </div>

                        <div id="row">
                            <Button onClick={() => (
                                window.location.href = "/login"
                            )} variant="contained" sx={{ marginRight: 4 }}>LOGIN</Button>

                            <Button onClick={() => (
                                window.location.href = "/cadastro"
                            )} variant="text">CADASTRAR-SE</Button>
                        </div>
                    </div>
                </div>

                <div id="container02">
                    <img src={FundoLandingPage} alt="Fundo Landing Page" />
                </div>
            </main>
        </div>
    )
}

export default LandingPage
