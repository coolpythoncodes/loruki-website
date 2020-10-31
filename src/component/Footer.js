import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer bg-dark py-5'>
            <div className="container grid grid-3">
                <div>
                    <h1>Loruki</h1>
                    <p>Copyright &copy; 2020</p>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/features">Features</Link>
                        </li>
                        <li>
                            <Link to="/docs">Docs</Link>
                        </li>
                    </ul>
                </nav>
                <div className="social">
                    <FontAwesomeIcon icon={ faGithub } size='2x'/>                    
                    <FontAwesomeIcon icon={ faFacebook } size='2x'/>
                    <FontAwesomeIcon icon={ faInstagram } size='2x'/>
                    <FontAwesomeIcon icon={ faTwitter } size='2x'/> 
                </div>
            </div>
        </footer>
    );
}

export default Footer;
