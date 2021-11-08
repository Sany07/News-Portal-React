import React, { Component } from "react";
import BaseRouter from "./routers";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/includes/Header";
import { Footer } from "./components/includes/Footer";
import { TopLoader } from "./components/includes/TopLoader";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div id="main-wrapper">
                        <TopLoader />
                        <Header />
                        <BaseRouter />
                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
