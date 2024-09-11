import { useState } from 'react';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button onClick={toggleMenu} className="dropdown-toggle">
                Menú
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    <li><a href='./Horario.jsx'>HORARIO SEMANAL</a></li>
                    <li><a href="./Nutricion.jsx">NUTRICION</a></li>
                    <li><a href="#opcion3">GYM</a></li>
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;