import React from 'react';
import ServerImg2 from '../images/server2.png'

const FeaturesSubHead = () => {
    return (
       <section className="features-sub-head bg-light py-3">
           <div className="container grid">
               <div>
                   <h1 className="md">The Loruki Platform</h1>
                   <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem debitis corporis dignissimos, maxime fuga ducimus molestias dicta sed, praesentium inventore obcaecati id quo corrupti! Sint dignissimos nihil repudiandae temporibus alias!
                   </p>
               </div>
               <img src={ServerImg2} alt=""/>
           </div>
       </section>
    );
}

export default FeaturesSubHead;
