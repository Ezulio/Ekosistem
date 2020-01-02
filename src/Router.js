import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
}from 'react-router-dom';
import Landing from './pages/Landing'
import Navbar from "./component/Navbar";
import Input from "./pages/Input";
import Hasil from "./pages/Hasil";

export default function router(){
    return(
      <Router>
          <Navbar />
          <div style={{padding:16}}>
          <switch>
              <Route path='/' exact component={Landing} />
              <Route path='/Input' component={Input} />
              <Route path='/Hasil' component={Hasil} />
          </switch>
          </div>
      </Router>
    );
}