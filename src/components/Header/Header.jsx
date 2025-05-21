import React, { useEffect, useRef } from "react";

import './Header.css'
import Nav from "../Nav/Nav"

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
                <h1>C.M.</h1>
                <Nav/>
            </div>
        </header>
    )
}

export default Header