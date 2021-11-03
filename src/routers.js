import React from "react";
import { Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import Category from "./pages/Category";
import NewsDetail from "./pages/NewsDetail";
import Tag from "./pages/Tag";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/loginPage";

const BaseRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route path="/category/:slug" exact component={Category} />
                <Route path="/post/:slug" exact component={NewsDetail} />
                <Route path="/tag/:tag" exact component={Tag} />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/login" component={LoginPage} />
            </Switch>
        </div>
    );
};

export default BaseRouter;
