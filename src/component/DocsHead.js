import React from 'react';
import DocsImg from '../images/docs.png';

const DocsHead = () => {
    return (
        <section className="docs-head bg-primary py-3">
        <div className="container grid">
            <div>
                <h1 className="xl">Docs</h1>
                <p className="lead">
                    Learn how to work with the Loruki platform
                </p>
            </div>
            <img src={DocsImg} alt=""/>
        </div>
    </section>
    );
}

export default DocsHead;
