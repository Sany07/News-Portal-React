import React from 'react'
import BaseRouter from './routers';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/includes/Header';
import Footer from './components/includes/Footer';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
  <Provider store = { store }>
      <header>
        <Router>
          <div id="main-wrapper">
                <Header />
                <BaseRouter />
                <Footer />
              </div>
        </Router>
      </header>
    </Provider>
  );
}

export default App;
