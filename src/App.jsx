import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import { Switch } from "react-router-dom";

const App = () => {
    return (
        <>
        <Switch>
        <Route/>
        <Home/>
        </Switch>
          
        </>
    )
}

export default App;