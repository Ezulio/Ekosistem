import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
}from 'react-router-dom';
import Landing from './pages/Landing'
import Navbar from "./component/Navbar";
import HasilEkonomi from "./pages/Hasil/HasilEkonomi";
import HasilSosbud from "./pages/Hasil/HasilSosbud";
import HasilSDM from "./pages/Hasil/HasilSDM";
import HasilPublik from "./pages/Hasil/HasilPublik";
import InputSosbud from "./pages/Input/InputSosbud";
import InputEkonomi from "./pages/Input/InputEkonomi";
import InputPublik from "./pages/Input/InputPublik";
import InputSDM from "./pages/Input/InputSDM";

export default function router(){
    return(
      <Router>
          <Navbar />
          <div style={{padding:16}}>
          <switch>
              <Route path='/' exact component={Landing} />
              <Route path='/Input/Ekonomi' component={InputEkonomi} />
              <Route path='/Input/Sosbud' component={InputSosbud} />
              <Route path='/Input/SDM' component={InputSDM} />
              <Route path='/Input/Publik' component={InputPublik} />
              <Route path='/Hasil/Ekonomi' component={HasilEkonomi} />
              <Route path='/Hasil/Sosbud' component={HasilSosbud} />
              <Route path='/Hasil/SDM' component={HasilSDM} />
              <Route path='/Hasil/Publik' component={HasilPublik} />
          </switch>
          </div>
      </Router>
    );
}