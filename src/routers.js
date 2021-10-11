import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import Category from './pages/Category';
import Single from './pages/Single';

const BaseRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Index} />
                <Route path="/category" exact component={Category} />
                <Route path="/single/" exact component={Single} />

            </Switch>
        </div>
    )
}

export default BaseRouter;