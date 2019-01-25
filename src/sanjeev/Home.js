import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Assignment1 from './assignment1/Navigation';
import Assignment2 from './assignment2/Home';


class Home extends Component {

  render() {
    return (
    	<Router>
        <div>
            <Route path ='/Assignment1' component={Assignment1} />
            <Route path = '/Assignment2' component={Assignment2} />
      	
	        	<Link to='/Assignment1'>Assignment1</Link><br/>
	          <Link to='/Assignment2'>Assignment2</Link><br/>
        </div>
      </Router>
    );
  }
}

export default Home;
