import "./App.css";

import React from 'react';

import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

import Routes from "./routes/Routes";


function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
