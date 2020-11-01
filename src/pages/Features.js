import React, { useEffect } from 'react';
import FeatureHead from '../component/FeatureHead';
import FeaturesMain from '../component/FeaturesMain';
import FeaturesSubHead from '../component/FeaturesSubHead';
import Layout from '../component/Layout';

const Features = () => {

    useEffect(() => {
        document.title = 'Loruki | Features';
    });
    
    return (
        <Layout>
            <FeatureHead />
            <FeaturesSubHead />
            <FeaturesMain />
        </Layout>
    );
}

export default Features;
