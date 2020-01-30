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
import {SeverityLevel} from '@microsoft/applicationinsights-web';
import { getAppInsights } from './TelemetryService';
import TelemetryProvider from './TelemetryProvider';
let instrumentationKey = process.env.REACT_APP_INSTRUMENTATION_KEY;

function App() {
  let appInsights = null;

  function trackException() {
      appInsights.trackException({ error: new Error('some error'), severityLevel: SeverityLevel.Error });
  }

  function trackTrace() {
      appInsights.trackTrace({ message: 'some trace', severityLevel: SeverityLevel.Information });
  }

  function trackEvent() {
      appInsights.trackEvent({ name: 'some event' });
  }

  function throwError() {
      let foo = {
          field: { bar: 'value' }
      };

      // This will crash the app; the error will show up in the Azure Portal
      return foo.fielld.bar;
  }

  function ajaxRequest() {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://httpbin.org/status/200');
      xhr.send();
  }

  function fetchRequest() {
      fetch('https://httpbin.org/status/200');
  }

  return (
    <TelemetryProvider instrumentationKey={instrumentationKey} after={() => { appInsights = getAppInsights() }}>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/videos' component={Videos}/>
        <Route exact path='/about' component={About} />
        <Route exact path='/cloud-computing' component={CloudComputing} />
        <Route exact path='/devops' component={DevOps} />
        <Route exact path='/software-development' component={SoftwareDevelopment}/>
        <Route exact path='/infrastructure-as-code' component={InfrastructureAsCode}/>
      </Layout>

    </TelemetryProvider>
  );
}

export default App;
