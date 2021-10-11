import React from 'react'
import BaseRouter from './routers';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header>
        <Router>
          <div id="main-wrapper">
                <Header />
                <BaseRouter />
                <Footer />
              </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
