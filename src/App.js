import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import HandleCases from './components/HandleCases';
import RefineText from './components/RefineText';
import FindAndReplace from './components/FindAndReplace';
import TextCounter from './components/TextCounter';
import SortText from './components/SortText';

function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null)

  const showAlert = (message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null)
      },1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      // document.title = "Textify - Dark"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      // document.title = "Textify - Light"
    }
  }

  return (
    <>
          <Router>
      <Navbar title="Textify" aboutText = "About" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <Dashboard showAlert={showAlert} mode={mode}/>
          </Route>
          <Route exact path="/handleCases">
          <HandleCases mode={mode} showAlert={showAlert} heading="Enter the text below"/>
          </Route>
          <Route exact path="/refineText">
          <RefineText mode={mode} showAlert={showAlert} heading="Enter the text below"/>
          </Route>
          <Route exact path="/find-and-replace">
          <FindAndReplace mode={mode} showAlert={showAlert} heading="Enter the text below"/>
          </Route>
          <Route exact path="/text-counter">
         <TextCounter mode={mode} showAlert={showAlert} heading="Enter the text below"/>
          </Route>
          <Route exact path="/sort-text-lines">
         <SortText mode={mode} showAlert={showAlert} heading="Enter the text below"/>
          </Route>
        </Switch>
      </div>
        </Router>

      {/* <About/> */}
    </>
  );
}

export default App;
