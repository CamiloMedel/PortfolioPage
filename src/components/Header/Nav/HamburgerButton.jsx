function HamburgerButton({ toggleMenu, isOpen }) {
    return (
        <button className="hamburger" onClick={toggleMenu}>
            <i class={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
    )
}

export default HamburgerButton