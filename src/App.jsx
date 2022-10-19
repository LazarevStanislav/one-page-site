import React from 'react'
import Main from './components/Main';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import WeBuy from './components/WeBuy';
import About from './components/About';
import Video from './components/Video';
import Price from './components/Price';
import WeWorks from './components/WeWorks';

function App() {
  return (
    <>
      <Footer />
      <NavBar />
      <Main />
      <WeBuy />
      <About name="#8" />
      <Video />
      <Price />
      <WeWorks />
      <Footer />
    </>
  );
}

export default App;
