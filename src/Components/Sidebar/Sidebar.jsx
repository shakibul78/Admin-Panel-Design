import { Assessment, Forum, Insights, LineStyle, MailOutline, ManageAccounts, Message, Paid, PersonOutline, ProductionQuantityLimits, Report, Timeline, TrendingUp } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PersonOutline className="sidebarIcon" />
                                Users
                            </li>
                        </Link>

                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <ProductionQuantityLimits className="sidebarIcon" />
                                Products
                            </li>
                        </Link>

                        <Link to="/newproduct" className="link">
                            <li className="sidebarListItem">
                                <Paid className="sidebarIcon" />
                                New product
                            </li>
                        </Link>

                        <li className="sidebarListItem">
                            <Assessment className="sidebarIcon" />
                            Reports
                        </li>

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <Forum className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <Message className="sidebarIcon" />
                            Messages
                        </li>

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <ManageAccounts className="sidebarIcon" />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Insights className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon" />
                            Reports
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;