import React from "react";
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

function User() {
    return (
        <div className="nav-link logo">
            <p>Logged as John Example <SettingsIcon /><PowerSettingsNewIcon /></p>   
        </div>
    );
}

export default User;