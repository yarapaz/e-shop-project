import '../styles/App.scss';
import Landing from './landing/Landing';
import React from 'react';
import { useState } from 'react';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Landing isClicked={isClicked} setIsClicked={setIsClicked} />
    </>
  );
}

export default App;
