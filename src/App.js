import React  from 'react';
import { Route } from 'react-router';
import './App.css';
import { Layout } from './components/Layout';
import { Home } from './components/Home/Home';
import {Videos} from './components/Videos/Videos';
import {About} from './components/About/About';
import {CloudComputing} from './components/CloudComputing/CloudComputing';
import {DevOps} from './components/DevOps/DevOps';
import { SoftwareDevelopment } from "./components/SoftwareDevelopment/SoftwareDevelopment";
import {InfrastructureAsCode} from './components/InfrastructureAsCode/InfrastructureAsCode';

function App() {
  return (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route exact path='/videos' component={Videos}/>
    <Route exact path='/about' component={About} />
    <Route exact path='/cloud-computing' component={CloudComputing} />
    <Route exact path='/devops' component={DevOps} />
    <Route exact path='/software-development' component={SoftwareDevelopment}/>
    <Route exact path='/infrastructure-as-code' component={InfrastructureAsCode}/>
  </Layout>
  );
}

export default App;
