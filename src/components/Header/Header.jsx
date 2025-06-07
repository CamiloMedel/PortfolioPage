import React, { useEffect, useRef } from "react";

import './Header.css'
import Nav from "../Nav/Nav"
import SignatureIcon from '../../assets/CamiloMIcon.png'

function Header(){
    const headerBox = useRef(null);
        useEffect(() => {
            let prevScrollPos = window.scrollY;
            const handleScroll = () => {
                if (window.scrollY > prevScrollPos) {
                    headerBox.current.style.transform = "translateY(-200px)";
                } else {
                    headerBox.current.style.transform = "translateY(0px)";
                }
                prevScrollPos = window.scrollY;
            }
            window.addEventListener('scroll', handleScroll);
            return () => { window.removeEventListener('scroll', handleScroll); }
        }, []);

    return (
        <header ref={headerBox}>
            <div className="header-container">
                <img src={SignatureIcon}/>
                <Nav/>
            </div>
        </header>
    )
}

export default Header