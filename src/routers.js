import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Index from './components/pages/Index';
import Category from './components/pages/Category';
import Single from './components/pages/Single';
import Tag from './components/pages/Tag';

const BaseRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Index} />
                <Route path="/category" exact component={Category} />
                <Route path="/single/" exact component={Single} />
                <Route path="/tag/" exact component={Tag} />

            </Switch>
        </div>
    )
}

export default BaseRouter;
