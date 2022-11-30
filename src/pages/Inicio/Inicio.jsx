import './Inicio.scss';
import '../../Variables.scss';

import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

// Fotos
import Logo from '../../assets/Logo.png';

// Icones
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

function Inicio() {
    return (
        <div id="Inicio">
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
                    <p>Bom dia, Camilly!</p>
                </div>

                <div id="container01">
                    <p>R$ 200,00</p>
                </div>

                <div id="container02">
                    <div className="container03">
                        <div className="box01">
                            <p>Pix</p>
                        </div>

                        <div className="box01">
                            <p>Pagar conta</p>
                        </div>

                        <div className="box01">
                            Transferir
                        </div>
                    </div>

                    <div className="container03">
                        <div className="box01">
                            Depositar
                        </div>

                        <div className="box01">
                            Poupança
                        </div>

                        <div className="box01">
                            Recarregar
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

/*
pix
pagar
transferir
depositar
*/

export default Inicio;