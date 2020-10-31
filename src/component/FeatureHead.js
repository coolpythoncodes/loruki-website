import React from 'react';
import ServerImg from '../images/server.png'

const FeatureHead = () => {
    return (
        <section className="features-head bg-primary py-3">
            <div className="container grid">
                <div>
                    <h1 className="xl">Features</h1>
                    <p className="lead">
                        Check out the features of the Loruki that separate us from the competition
                    </p>
                </div>
                <img src={ServerImg} alt=""/>
            </div>
        </section>
    );
}

export default FeatureHead;
