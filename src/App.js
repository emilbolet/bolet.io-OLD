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
import { News } from './components/News/News';

import { getAppInsights } from './TelemetryService';
import TelemetryProvider from './TelemetryProvider';

let instrumentationKey = process.env.REACT_APP_INSTRUMENTATION_KEY;

function App() {

  return (
    <TelemetryProvider instrumentationKey={instrumentationKey} after={() => getAppInsights() }>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/cloud-computing' component={CloudComputing} />
        <Route exact path='/devops' component={DevOps} />
        <Route exact path='/software-development' component={SoftwareDevelopment}/>
        <Route exact path='/infrastructure-as-code' component={InfrastructureAsCode}/>
        <Route exact path='/news' component={News}/>
      </Layout>

    </TelemetryProvider>
  );
}

export default App;
