import React from 'react';
import "./Topbar.css";
import pler1 from "../images/plier1.PNG"
import { Language, Settings, NotificationsNone } from '@mui/icons-material';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">SK-Dashbord</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />

                    </div>
                    <img src={pler1} alt="" className="topAvatar" />
                </div>
            </div>

        </div>
    );
};

export default Topbar;