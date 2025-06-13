import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router";

import './Header.css'
import NavLinks from "./Nav/NavLinks"
import HamburgerButton from "./Nav/HamburgerButton";
import MobileMenu from "./Nav/MobileMenu";
import SignatureIcon from '../../assets/CamiloMIcon.png'

function Header(){
    const [menuOpen, setMenuOpen] = useState(false)

    const headerBox = useRef(null);
    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            if (menuOpen) return;

            const currentScroll = window.scrollY;

            //always shouw the header when near the top of the screen
            if (currentScroll <= 0) {
               headerBox.current.style.transform = "translateY(0px)";
            }
            else if (currentScroll> prevScrollPos) {
                headerBox.current.style.transform = "translateY(-200px)";
            } else {
                headerBox.current.style.transform = "translateY(0px)";
            }

            prevScrollPos = currentScroll;
        };

        document.body.style.overflow = menuOpen ? "hidden" : "auto";

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = "auto";
        }
    }, [menuOpen]);

    return (
        <>
            <header ref={headerBox}>
                <div className="header-container">
                    <Link to='/'><img src={SignatureIcon} alt="Camilo Medel logo"/></Link>
                    {/* Desktop Navigation */}
                    <NavLinks/>

                    {/* Hamburger Button for smaller screens */}
                    <HamburgerButton toggleMenu={() => setMenuOpen(!menuOpen)} isOpen={menuOpen}/>
                </div>
            </header>
            {/*Mobile navigation menu */}
            {menuOpen && <MobileMenu closeMenu={() => setMenuOpen(false)}/>}
        </>
    )
}

export default Header