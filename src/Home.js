import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Sanjeev from './sanjeev/Home';
import Sumit from './sumit/Home';
import Tarsem from './tarsem/Home';

class Home extends Component {

  render() {
    return (
      <Router>
          <div style={{textAlign:'center'}} >
            <Route path ='/Sanjeev' component={Sanjeev} />
            <Route path = '/Sumit' component={Sumit} />
            <Route path ='/Tarsem' component={Tarsem} />

    
            <Link to='/Sanjeev'><h1>Sanjeev</h1></Link><br/>
            <Link to='/Sumit'><h1>Sumit</h1></Link><br/>
            <Link to='/Tarsem'><h1>Tarsem</h1></Link><br/>
          </div>
      </Router>
    );
  }
}

export default Home;
