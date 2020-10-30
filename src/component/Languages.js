import React from 'react';
import NodeImg from './../images/node.png';
import PythonImg from './../images/python.png';
import CsharpImg from './../images/csharp.png';
import RubyImg from './../images/ruby.png';
import PhpImg from './../images/php.png';
import ScalaImg from './../images/scala.png';
import ClojureImg from './../images/clojure.png';



const Languages = () => {
    return (
        <section className='languages'>
            <h1 className="md text-center my-2">
                Supported Languages
            </h1>
            <div className="container flex">
                <div className="card">
                    <h4>Node.js</h4>
                    <img src={NodeImg} alt=""/>
                </div>
                <div className="card">
                    <h4>Python</h4>
                    <img src={PythonImg} alt=""/>
                </div>
                <div className="card">
                    <h4>C#</h4>
                    <img src={CsharpImg} alt=""/>
                </div>
                <div className="card">
                    <h4>Ruby</h4>
                    <img src={RubyImg} alt=""/>
                </div>
                <div className="card">
                    <h4>PHP</h4>
                    <img src={PhpImg} alt=""/>
                </div>
                <div className="card">
                    <h4>Scala</h4>
                    <img src={ScalaImg} alt=""/>
                </div>
                <div className="card">
                    <h4>Clojure</h4>
                    <img src={ClojureImg} alt=""/>
                </div>
            </div>
        </section>
    );
}

export default Languages;
