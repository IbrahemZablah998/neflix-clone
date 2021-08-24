import React, { useEffect, useState } from 'react';
import './Nav.css';

const Nav = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg"
                    alt="Netflix Logo"
                    className="nav_logo"
                />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="Netflix Logo"
                    className="nav_avatar"
                />
            </div>
        </div>
    )
}

export default Nav
