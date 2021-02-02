import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import About  from "./About";
import Home from "./Home";
import Products  from "./Product";
import ProductItem  from "./ProductItem";
import NavBar from './NavBar';

function RouterConfig() {
  return (
    <div>
        <Router>
            <NavBar></NavBar>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/About" component={About}/>
                <Route exact path="/Products" component={Products}/>
                <Route path="/Products/:id" component={ProductItem}/>
                <Route path="*" component={() => <h2>404 Not Found</h2>}/>
            </Switch>
        </Router>
    
    </div>
  );
}

export default RouterConfig;
