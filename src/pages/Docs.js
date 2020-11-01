import React, { useEffect } from 'react';
import DocsHead from '../component/DocsHead';
import DocsMain from '../component/DocsMain';
import Layout from '../component/Layout';

const Docs = () => {

    useEffect(() => {
        document.title = 'Loruki | Docs';
    });

    return (
        <Layout>
            <DocsHead />
            <DocsMain />
        </Layout>
    );
}

export default Docs;
