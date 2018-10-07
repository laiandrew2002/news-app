import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Main from './components/router'
import Footer from './components/footer'

import './App.css';

class App extends Component {
 

  render() {
    return (
      <div className="">
        <header className="bg-white black-80 tc pv4 avenir">
          
          <h1 className="mt2 mb0 baskerville i fw6 f1 animated infinite pulse delay-2s">CCB NEWS</h1>
          <h2 className="mt2 mb0 f6 fw4 ttu tracked">BRINGS YOU THE LATEST NEWS</h2>
          <nav className="bt bb tc mw7 center mt4">
            <Link 
              className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/">HOME</Link>
            <Link 
              className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" to="/Tech">TECH</Link>
            <Link 
              className="f6 f5-l link bg-animate black-80 hover-bg-light-gray dib pa3 ph4-l" to="/Business">BUSINESS</Link>
            <Link 
              className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/Sport">SPORT</Link>
            <Link 
              className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" to="/Entertainment">ENTERTAINMENT</Link>
          </nav>
        </header>
        
        <div className='container'>
          <Main />
          
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
