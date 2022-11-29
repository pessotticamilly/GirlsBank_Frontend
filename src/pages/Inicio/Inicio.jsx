import './Inicio.scss';
import '../../Variables.scss';

import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton';

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
                    <IconButton>
                        <NotificationsIcon sx={{ color: "#1976d2" }} />
                    </IconButton>

                    <IconButton sx={{ marginLeft: 2 }}>
                        <PersonIcon sx={{ color: "#1976d2" }} />
                    </IconButton>

                    <IconButton sx={{ marginLeft: 2 }}>
                        <SettingsIcon sx={{ color: "#1976d2" }} />
                    </IconButton>

                    <IconButton sx={{ marginLeft: 2 }}>
                        <LogoutIcon sx={{ color: "#1976d2" }} />
                    </IconButton>
                </div>
            </header>

            <main>
                <div id="text01">
                    <p>Bom dia Camilly!</p>
                </div>

                <div id="container01">
                    aaaa
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