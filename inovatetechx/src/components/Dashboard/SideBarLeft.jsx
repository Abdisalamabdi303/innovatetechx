import React from 'react';
import './SideBarLeft.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SideBarLeft() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

    return (<>
       
        <aside className="sidebar-left">
            <button className="menu-bar-icon" onClick={toggleSidebar}>
                {!sidebarVisible ? (
                <i class="fa-solid fa-bars"></i>
                ) : (
                    <i class="fa-regular fa-circle-xmark"></i>
                )}
            </button>
             <div className="sidebar-menu">
                <a href="#" className="menu-item active">
                <i class="fa-solid fa-house"></i>
                    <span>Home</span>
                </a>
                <a href="#" className="menu-item">
                <i class="fa-solid fa-list-check"></i>
                    <span>My Tasks</span>
                </a>
                <a href="#" className="menu-item">
                <i class="fa-solid fa-user"></i>
                    <span>Members</span>
                </a>
                <Link to='/profile' className="menu-item">
                <i class="fa-solid fa-gear"></i>
                    <span>Settings</span>
                </Link>
                <div className="menu-separator"></div>
                <div className="menu-section-label">TEAMS</div>
                <a href="#" className="menu-item">
                <i class="fa-solid fa-message"></i>
                    <span>Message</span>
                </a>
                <a href="#" className="menu-item">
                <i class="fa-solid fa-phone"></i>
                    <span>Call Meeting</span>
                </a>
                <div className="menu-section-label">GENERAL</div>
                <a href="#" className="menu-item-log">
                <i class="fa-solid fa-arrow-right-from-bracket fa-rotate-180"></i>
                    <span>Log Out</span>
                </a>
            </div>
            <div className="sidebar-theme-toggle">
                {/* Include moon and sun icons for dark/light theme toggle */}
            </div>
        </aside>
        </>
    );
}

export default SideBarLeft;
