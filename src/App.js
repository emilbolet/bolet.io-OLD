import React  from 'react';
import { Route } from 'react-router';
import './App.css';
import { Layout } from './components/Layout';
import { Home } from './components/Home/Home';
import {Videos} from './components/Videos/Videos'
import {Portfolio} from './components/Portfolio/Portfolio'
import {Resume} from './components/Resume/Resume'
import {About} from './components/About/About'


function App() {
  return (
  <Layout>
    <Route exact path='/' component={Home} />

    <Route exact path='/videos' component={Videos}/>
    <Route exact path='/portfolio' component={Portfolio} />
    <Route exact path='/resume' component={Resume} />
    <Route exact path='/about' component={About} />
  </Layout>
  );
}

export default App;
