import { Container } from '@mui/system';
import React from 'react'
import BodyPage from './components/BodyPage';
import Example from './components/NavBar';
import TopHead from './components/TopHead';

function App() {
  return (
    <Container>
      <TopHead />
      <Example />
      <BodyPage />
    </Container>
  );
}

export default App;
