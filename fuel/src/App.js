// import React from 'react';
import React, { useState } from 'react';
import './App.css';
import {Navbar, Footer, Main} from './components'
const App = () => {
  return (
    <div className='App'>
        <div className="header">
            <Navbar />
            hello
        </div>
        <Main/>
        <Footer />
    </div>
  )
}

export default App
