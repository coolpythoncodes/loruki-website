import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfo } from '@fortawesome/free-solid-svg-icons'

const DocsMain = () => {
    return (
        <section className="docs-main my-4">
            <div className="container grid">
                <div className="card bg-light p-3">
                    <h3 className="my-2">Essentials</h3>
                    <nav>
                        <ul>
                            <li><a className='text-primary' href="#">Introduction</a></li>
                            <li><a href="#">About Loruki</a></li>
                            <li><a href="#">Installation</a></li>
                        </ul>
                    </nav>

                    <h3 className="my-2">Deployment</h3>
                    <nav>
                        <ul>
                            <li><a href="#">Setting up a container</a></li>
                            <li><a href="#">Using the CLI</a></li>
                            <li><a href="#">Installation</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="card">

                    <h2>Introduction</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias exercitationem delectus rem sit sunt, ratione aspernatur deserunt quasi doloremque nostrum distinctio temporibus fugit itaque. Recusandae consectetur tempore cumque harum.</p>

                    <div className="alert alert-success">
                        <FontAwesomeIcon icon={ faInfo } /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, rem?
                    </div>

                    <h3>Lorem, ipsum dolor.</h3>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, fugiat ad quaerat quisquam pariatur ullam hic repudiandae doloribus laboriosam dignissimos.</p>

                    <a href="#" className="btn btn-primary">Install CLI</a>

                    <h3>Requirements</h3>

                    <ul>
                        <li>Windows 10, Mac OSX, Linux</li>
                        <li>Node.js v12 or higher</li>
                    </ul>

                    <h3>Install</h3>
                    <p>Mac (Homebrew)</p>
                    <pre><code>$ brew install loruki-cli</code></pre>
                    <p>NPM</p>
                    <pre><code>$ npm install loruki-cli</code></pre>
                    <p>Yarn</p>
                    <pre><code>$ yarn install loruki-cli</code></pre>
                </div>
            </div>
        </section>
    );
}

export default DocsMain;
