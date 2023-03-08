import React from "react";
import { Link } from 'react-router-dom';
class Sidebar extends React.Component{
    render(){
       return (
        <div class="main-sidebar sidebar-style-2">
                <aside id="sidebar-wrapper">
                <div class="sidebar-brand">
                    <a href="index.html"> <img alt="image" src="assets/img/logo.png" class="header-logo" /> <span
                        class="logo-name">COVID-19</span>
                    </a>
                </div>
                <ul class="sidebar-menu">
                    <li class="menu-header">Main</li>
                    <li class="dropdown">
                    <Link to="/dashboard" onClick={() => {window.location.href="/dashboard"}} class="nav-link"><i data-feather="monitor"></i><span>Dashboard</span></Link>
                    </li>
                    <li class="dropdown">
                    <Link to="/centerlist" class="nav-link"><i data-feather="briefcase"></i><span>Centers</span></Link>
                    </li>
                    <li class="dropdown">
                    <Link to="/resisdentlist" class="nav-link"><i data-feather="command"></i><span>Resisdent</span></Link>
                    </li>
                    <li class="dropdown">
                    <Link to="/nurselist" class="nav-link"><i data--="mail"></i><span>Nurses</span></Link>
                    </li>
                    <li class="dropdown">
                    <Link to="/bookreservation" class="nav-link"><i data-feather="copy"></i><span>Book Reservation</span></Link>    
                    </li>
                    <li class="dropdown">
                    <Link to="/reservationlist" class="nav-link"><i data-feather="copy"></i><span>All Reservation</span></Link>    
                    </li>
                </ul>
                </aside>
            </div>
       );
    }
}

export default Sidebar;