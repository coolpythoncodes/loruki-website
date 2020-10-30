import React from 'react';
import Cli from './component/Cli';
import Cloud from './component/Cloud';
import Languages from './component/Languages';
import Layout from './component/Layout';
import Showcase from './component/Showcase';
import Stats from './component/Stats';


import './sass/main.scss'

function App() {
  return (
    <>
      <Layout>
        <Showcase />
        <Stats />
        <Cli />
        <Cloud />
        <Languages />
      </Layout>
    </>
  );
}

export default App;
