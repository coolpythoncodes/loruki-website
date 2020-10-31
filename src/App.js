import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



import Cli from './component/Cli';
import Cloud from './component/Cloud';
import Languages from './component/Languages';
import Layout from './component/Layout';
import Showcase from './component/Showcase';
import Stats from './component/Stats';
import Docs from './pages/Docs';
import Features from './pages/Features';


import './sass/main.scss'

function App() {
  return (
    <>
      <Router>

        <Switch>
          <Route exact path='/' render={
            () =>
              <Layout>
                <Showcase />
                <Stats />
                <Cli />
                <Cloud />
                <Languages />
              </Layout>
          } />


          <Route path='/features'>
              <Features />
          </Route>

          <Route path='/docs'>
            <Docs />
          </Route>
        </Switch>

      </Router>
    </>
  );
}

export default App;
