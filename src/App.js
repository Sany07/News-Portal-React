import React, { Component } from "react";
import BaseRouter from "./routers";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/includes/Header";
import { Footer } from "./components/includes/Footer";
import { beginTheBar } from "./services/topLoadingBar";
import LoadingBar from "react-top-loading-bar";
import { TopLoadingBarProgress } from "./redux/actions/topLoadingBarProgress";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
    render() {
        const { topProgressBar } = store.getState();
        console.log("loadingProgress", topProgressBar);
        return (
            <Provider store={store}>
                <Router>
                    <div id="main-wrapper">
                        {" "}
                        <LoadingBar
                            color="red"
                            height={3}
                            progress={topProgressBar.loadingProgress}
                            onLoaderFinished={() => store.dispatch(TopLoadingBarProgress(0))}
                        />
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
