import React from 'react'
import Main from './components/Main';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import WeBuy from './components/WeBuy';
import About from './components/About';

function App() {
  return (
    <>
      <Footer />
      <NavBar />
      <Main />
      <WeBuy />
      <About name="#8"/>
      <Footer />
    </>
  );
}

export default App;
