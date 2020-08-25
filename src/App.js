import React from 'react';
import LandingPage from './components/Pages/LandingPage';
import ToDoPage from './components/Pages/ToDoPage';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/ToDoPage" ><ToDoPage /></Route>
                <Route path="/" ><LandingPage /></Route>
            </Switch>
        </BrowserRouter>
    );
}