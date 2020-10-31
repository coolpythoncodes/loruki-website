import React from 'react';
import DocsHead from '../component/DocsHead';
import DocsMain from '../component/DocsMain';
import Layout from '../component/Layout';

const Docs = () => {
    return (
        <Layout>
            <DocsHead />
            <DocsMain />
        </Layout>
    );
}

export default Docs;
