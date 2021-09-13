import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Panel/Dashboard"
import Order from './components/Panel/Order';
import Panel from './components/Panel/Panel';
import Products from './components/Panel/Products';

function Routes() {
    return (
        <div>
            {/* <BrowserRouter> */}
            <Switch>
            <Route path="/" exact component={Panel}/>
            <Route path="/panel/dashboard" exact component={Dashboard} />
            <Route path="/panel/order" exact component={Order} />
            <Route path="/panel/products" exact component={Products} />

           
           
            </Switch>
            {/* </BrowserRouter> */}
        </div>
    )
}

export default Routes
