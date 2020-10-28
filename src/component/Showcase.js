import React from 'react';

const Showcase = () => {
    return (
			<section className="showcase">
				<div className="container grid">
					<div className="showcase-text">
                        <h1>Easier Deployment</h1>
                        <p>Deploy web apps of all kinds, from large </p>
                        <a href="" className="btn btn-outline">Read more</a>
                    </div>

                    <div className="showcase-form card">
                        <h1>Request a Demo </h1>
                        <form>
                            <div className="form-control">
                                <input type="text" name="name" placeholder='Name' required/>
                            </div>
                            <div className="form-control">
                                <input type="text" name="company" placeholder='Company Name' required/>
                            </div>
                            <div className="form-control">
                                <input type="email" name="email" placeholder='Email' required/>
                            </div>
                            <input type="submit" value="Send" className="btn btn-primary"/>
                        </form>
                    </div>
				</div>
			</section>
		);
}

export default Showcase;
