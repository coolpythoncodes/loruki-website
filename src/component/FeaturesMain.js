import { faDatabase, faLaptop, faNetworkWired, faPowerOff, faServer, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const FeaturesMain = () => {
    return (
        <section className="features-main my-2">
            <div className="container grid grid-3">
                <div className="card flex">
                    <FontAwesomeIcon icon={faServer} size='3x'/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias aliquid laborum expedita aperiam at vel deserunt quisquam! Est sequi cum suscipit tempore cupiditate cumque distinctio minima, quasi voluptatum totam fugiat!</p>
                </div>
                <div className="card flex">
                    <FontAwesomeIcon icon={faNetworkWired} size='3x'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolor quasi nulla maiores quibusdam consequatur, esse similique nam laboriosam a?</p>
                </div>
                <div className="card flex">
                    <FontAwesomeIcon icon={faLaptop} size='3x'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, temporibus?</p>
                </div>
                <div className="card flex">
                    <FontAwesomeIcon icon={faDatabase} size='3x'/>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, error.</p>
                </div>
                <div className="card flex">
                    <FontAwesomeIcon icon={faPowerOff} size='3x'/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias aliquid laborum expedita aperiam at vel deserunt quisquam! Est sequi cum suscipit tempore cupiditate cumque distinctio minima, quasi voluptatum totam fugiat!</p>
                </div>
                <div className="card flex">
                    <FontAwesomeIcon icon={faUpload} size='3x'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, sint!</p>
                </div>
            </div>
        </section>
    );
}

export default FeaturesMain;
