import './Inicio.scss';
import { useState, useEffect } from 'react';

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
import axios from 'axios';

function Inicio() {
    const [open, setOpen] = useState(false);
    const [operacao, setOperacao] = useState('');
    const [valor, setValor] = useState(0);
    const [numeroContaTrans, setNumeroContaTrans] = useState();
    const [pessoa, setPessoa] = useState(JSON.parse(localStorage.getItem("PESSOA")));
    const [conta, setConta] = useState({ numero: 0, saldo: 0, pessoa: { id: 0, nomeCompleto: "", cpf: 0, senha: "", telefone: 0, email: "" } });

    useEffect(() => {
        axios.get(`http://localhost:8086/girlsbank/conta/pessoa/${pessoa.id}`)
            .then((response) => {
                setConta(response.data)
            })
    }, [])

    function handleClick(_operacao) {
        setOperacao(_operacao);
        setOpen(true);
    };

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
        if (operacao === "pagarConta") {
            return depositar(false);
        };

        if (operacao === "transferir") {
            return transferir();
        };

        if (operacao === "depositar") {
            return depositar(true);
        };
    };

    async function transferencia() {
        const contaPagante = {
            numero: conta.numero,
            saldo: (conta.saldo - valor),
            pessoa: conta.pessoa
        };

        axios.put(`http://localhost:8086/girlsbank/conta/editar/${conta.numero}`, contaPagante)
            .then((response) => {
            });

        const contaRecebedor = await axios.get(`http://localhost:8086/girlsbank/conta/listar/${numeroContaTrans}`)
            .then(response => response.data)

        contaRecebedor.saldo += valor;

        axios.put(`http://localhost:8086/girlsbank/conta/editar/${contaRecebedor.numero}`, contaRecebedor)
            .then((response) => {
            });

        window.location.reload();
    }

    useEffect(() => {
    }, [valor, conta])

    function transferir() {
        return (
            <div id="operacao">
                <div id="text02">
                    <p>Transferir</p>
                </div>

                <form>
                    <TextField id="numeroConta" type="number" label="Número da conta" required onChange={(e) => setNumeroContaTrans(e.target.value)} variant="outlined" sx={{ marginBottom: "2rem", width: "20vw" }} />

                    <TextField id="valor" error={valor > conta.saldo} helperText={valor > conta.saldo && "Saldo insuficiente"} type="number" label="Valor" required onChange={(e) => setValor(parseInt(e.target.value))} variant="outlined" sx={{ marginBottom: "4rem", width: "20vw" }} />

                    <Button id="entrar" type="submit" variant="contained" onClick={transferencia}>Confirmar</Button>
                </form>
            </div>
        );
    };

    function deposito(deposito) {
        const contaPut = {
            numero: conta.numero,
            saldo: deposito ? (conta.saldo + valor) : (conta.saldo - valor),
            pessoa: conta.pessoa
        }

        axios.put(`http://localhost:8086/girlsbank/conta/editar/${conta.numero}`, contaPut)
            .then((response) => {
            });

        window.location.reload();
    };

    function depositar(depositoParam) {
        return (
            <div id="operacao">
                <div id="text02">
                    <p>{depositoParam ? "Depositar" : "Pagar Conta"}</p>
                </div>

                <form>
                    {depositoParam ? <TextField id="valor" type="number" label="Valor" required variant="outlined" sx={{ marginBottom: "4rem", width: "20vw" }} onChange={(e) => { setValor(parseInt(e.target.value)) }} /> : <TextField id="valor" type="number" label="Valor" error={valor > conta.saldo} helperText={valor > conta.saldo && "Saldo insuficiente"}required variant="outlined" sx={{ marginBottom: "4rem", width: "20vw" }} onChange={(e) => { setValor(parseInt(e.target.value)) }} />}

                    <Button id="entrar" type="submit" variant="contained" onClick={() => deposito(depositoParam)} >Confirmar</Button>
                </form>
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
                    <p>Bom dia, {conta.pessoa.nomeCompleto.split(" ")[0] ?? ""}!</p>
                </div>

                <div id="container01">
                    <p>Número da conta: {conta.numero}</p>
                    <p>R$ {conta.saldo}</p>
                </div>

                <div id="container02">
                    <div className="container03">
                        <div className="box01" >
                            <img src={Pix} alt="Pix" />
                            <p>Pix</p>
                        </div>

                        <div className="box01" onClick={() => handleClick("pagarConta")} >
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