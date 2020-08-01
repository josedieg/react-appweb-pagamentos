import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router'
import DashBoard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

const routers = () => {
    return (
        <Router history={hashHistory}>
            <Router path='/' component={DashBoard}></Router>
            <Route path='/billingCycles' component={BillingCycle}></Route>
            <Redirect from='*' to='/'></Redirect>
        </Router>
    );
}

export default routers;
