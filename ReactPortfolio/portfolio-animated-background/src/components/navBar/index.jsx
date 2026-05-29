import { FaBars, FaReact} from 'react-icons/fa';
import {HiX} from 'react-icons/hi';
import {Link} from "react-router-dom";
import React, { useState } from "react";
import './styles.scss';

const data = [
    {
        label: "Home",
        to: '/'
    },
    {
        label: "About Me",
        to: '/about'
    },
    {
        label: "Skills",
        to: '/skills'
    },
    {
        label: "Resume",
        to: '/resume'
    },
    {
        label: "Contact",
        to: '/contact'
    },
    {
        label: "Portfolio",
        to: '/portfolio'
    }
];

const NavBar = () => {

    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }

    return (
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={'/'} className="navbar__container__logo">
                        <FaReact size={30} />
                    </Link>
                </div>
                <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ""}`}>
                    {data.map((item, key) => (
                        <li key={key} className="navbar__container__menu__item">
                            <Link to={item.to} className="navbar__container__menu__item__link">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="nav_icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>
        </div>
    )
}

export default NavBar;