import './Inicio.scss';

import Container from '@mui/material/Container';
import Logo from '../../assets/Logo.png';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
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
                        <NotificationsIcon />
                    </IconButton>

                    <IconButton sx={{ marginLeft: 2 }}>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </header>
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