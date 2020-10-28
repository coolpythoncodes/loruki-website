import React from 'react';
import './../sass/main.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container flex">
                <h1 className="logo">Loruki.</h1>
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Docs</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
