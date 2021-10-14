import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import Category from './pages/Category';
import Single from './pages/Single';
import Tag from './pages/Tag';

const BaseRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Index} />
                <Route path="/category/:slug" exact component={Category} />
                <Route path="/post/:slug" exact component={Single} />
                <Route path="/tag/:tag" exact component={Tag} />

            </Switch>
        </div>
    )
}

export default BaseRouter;
