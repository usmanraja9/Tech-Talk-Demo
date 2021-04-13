import React, {} from 'react';
import '../css/Home.css';
import logo from '../css/logo.svg';
import Header from '../components/Header.jsx';
import NavBar from '../components/NavBar.jsx';

const Home = () => {
    return (<div className="App">
        <div>
          <Header/>
          <NavBar/>
        </div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        React Tech Talk
      </p>
    </header>

    </div>)
}

export default Home
