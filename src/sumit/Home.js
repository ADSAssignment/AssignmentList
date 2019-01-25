import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Assignment1 from './assignment1/Home';
import Assignment2 from './assignment2/Home';


class Home extends Component {

  render() {
    return (
    	<Router>
        <div>
            <Route path ='/Assignment1' component={Assignment1} />
            <Route path = '/Assignment2' component={Assignment2} />
      	
	        	<Link to='/Assignment1'>MyAssignment1</Link><br/>
	          <Link to='/Assignment2'>MyAssignment2</Link><br/>
        </div>
      </Router>
    );
  }
}

export default Home;
