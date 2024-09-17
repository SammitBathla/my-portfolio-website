import React from 'react'
import "./Navbar.css"
import MobileNav from './MobileNav/MobileNav';
import { useState } from 'react';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };


  return (
    <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

        <nav className="nav-wrapper">
            <div className="nav-content">
                {/* <img className="logo" src="mylogo.png" alt=""/> */}
                <h2 className="myname" font-weight={500} hieght={20}>Sammit Bathla</h2>
                <ul className="uol">
                    <li>
                        <a className="menu-item">Home</a>
                    </li>
                    <li>
                        <a className="menu-item">Skills</a>
                    </li>
                    <li>
                        <a className="menu-item">Work Experience</a>
                    </li>
                    <li>
                        <a className="menu-item">Contact me</a>
                    </li>

                    <button className="contact-btn" onClick={() => {}}>
                        Hire me
                    </button>
                </ul>
                 
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span
                            class={"material-symbols-outlined"}
                            style={{fontSize: "1.8rem"}}
                        >
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
               

            </div>
        </nav>
    </>
  )
}


export default Navbar