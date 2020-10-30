import React from 'react';
import Cli from './component/Cli';
import Cloud from './component/Cloud';
import Navbar from './component/Navbar';
import Showcase from './component/Showcase';
import Stats from './component/Stats';

function App() {
  return (
    <>
      <Navbar />
      <Showcase />
      <Stats />
      <Cli />
      <Cloud />
    </>
  );
}

export default App;
