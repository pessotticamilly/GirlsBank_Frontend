import './Inicio.scss';

import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

// Fotos
import Depositar from '../../assets/Depositar.png';
import Logo from '../../assets/Logo.png';
import Pagar from '../../assets/Pagar.png';
import Pix from '../../assets/Pix.png';
import Poupanca from '../../assets/Poupança.png';
import Recarregar from '../../assets/Recarregar.png'
import Transferir from '../../assets/Transferir.png';

// Icones
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

function Inicio() {
    const [open, setOpen] = React.useState(false);
    const [operacao, setOperacao] = React.useState('');

    let pessoa = JSON.parse(localStorage.getItem('PESSOA'));

    let primeiroNome = pessoa.nomeCompleto.split(" ")[0];

    function handleClick(_operacao) {
        setOperacao(_operacao);
        setOpen(true);
    };

    React.useEffect(() => {
        console.log(operacao)
        console.log(open)
    }, [operacao, open])

    function modal() {
        return (
            <div id="fundo" open={true}>
                <div id="modal">
                    <div id="row">
                        <Tooltip title="Fechar">
                            <IconButton onClick={() => setOpen(!open)}>
                                <CloseIcon sx={{ color: "#999" }} />
                            </IconButton>
                        </Tooltip>
                    </div>
                    {verOperacao()}
                </div>
            </div>
        );
    };

    function verOperacao() {
        if (operacao === "pix") {
            return pix();
        };

        if (operacao === "transferir") {
            return transferir();
        };

        if (operacao === "depositar") {
            return depositar();
        };
    };

    // function pix() {
    //     return (
    //         <div id="operacao">
    //             <TextField id="cpf" type="number" label="CPF" variant="outlined" sx={{ marginBottom: "2rem", width: "20vw" }} />
    //         </div>
    //     );
    // };

    function transferir() {
        return (
            <div id="operacao">
                <div id="text02">
                    <p>Transferir</p>
                </div>

                <TextField id="numeroConta" type="number" label="Número da conta" variant="outlined" sx={{ marginBottom: "2rem", width: "20vw" }} />

                <TextField id="valor" type="number" label="Valor" variant="outlined" sx={{ marginBottom: "4rem", width: "20vw" }} />

                <Button id="entrar" variant="contained">Confirmar</Button>
            </div>
        );
    };

    function depositar() {
        return (
           <div id="operacao">
                <div id="text02">
                    <p>Depositar</p>
                </div>

                <TextField id="valor" type="number" label="Valor" variant="outlined" sx={{ marginBottom: "4rem", width: "20vw" }} />

                <Button id="entrar" variant="contained">Confirmar</Button>
            </div>
        );
    };

    return (
        <div id="Inicio">
            {open && modal(operacao)}

            <header>
                <div id="logo">
                    <img src={Logo} alt="Logo" />
                </div>

                <div id="nav">
                    <Tooltip title="Notificações">
                        <IconButton>
                            <NotificationsIcon sx={{ color: "#1976d2" }} />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Meu perfil">
                        <IconButton sx={{ marginLeft: 2 }}>
                            <PersonIcon sx={{ color: "#1976d2" }} />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Configurações">
                        <IconButton sx={{ marginLeft: 2 }}>
                            <SettingsIcon sx={{ color: "#1976d2" }} />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Sair">
                        <IconButton sx={{ marginLeft: 2 }}>
                            <LogoutIcon sx={{ color: "#1976d2" }} onClick={() => {
                                window.location.href = "/";
                            }} />
                        </IconButton>
                    </Tooltip>
                </div>
            </header>

            <main>
                <div id="text01">
                    <p>Bom dia, {primeiroNome}!</p>
                </div>

                <div id="container01">
                    <p>Número da conta: 0000</p>
                    <p>Saldo: R$</p>
                </div>

                <div id="container02">
                    <div className="container03">
                        <div className="box01" >
                            <img src={Pix} alt="Pix" />
                            <p>Pix</p>
                        </div>

                        <div className="box01">
                            <img src={Pagar} alt="Pagar" />
                            <p>Pagar conta</p>
                        </div>

                        <div className="box01" onClick={() => handleClick("transferir")} >
                            <img src={Transferir} alt="Transferir" />
                            <p>Transferir</p>
                        </div>
                    </div>

                    <div className="container03">
                        <div className="box01" onClick={() => handleClick("depositar")} >
                            <img src={Depositar} alt="Depositar" />
                            <p>Depositar</p>
                        </div>

                        <div className="box01">
                            <img src={Poupanca} alt="Poupança" />
                            <p>Poupança</p>
                        </div>

                        <div className="box01">
                            <img src={Recarregar} alt="Recarregar" />
                            <p>Recarregar</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Inicio;