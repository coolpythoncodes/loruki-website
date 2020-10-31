import React from 'react';
import FeatureHead from '../component/FeatureHead';
import FeaturesMain from '../component/FeaturesMain';
import FeaturesSubHead from '../component/FeaturesSubHead';
import Layout from '../component/Layout';

const Features = () => {
    return (
        <Layout>
            <FeatureHead />
            <FeaturesSubHead />
            <FeaturesMain />
        </Layout>
    );
}

export default Features;
