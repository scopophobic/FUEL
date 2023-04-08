import React from 'react';
// import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Footer, Main} from './components'


const App = () => {
  return (
    <div className='App'>
        <div className="header">
            <Navbar />
        </div>
        <Main/>
        <Footer />
    </div>
  )
}

export default App
