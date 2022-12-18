import '../styles/App.scss';
import Landing from './landing/Landing';
import React from 'react';
import { useState } from 'react';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isSClicked, setSIsClicked] = useState(false);
  const [isMClicked, setMIsClicked] = useState(false);
  const [isLClicked, setLIsClicked] = useState(false);
  const [isXLClicked, setXLIsClicked] = useState(false);

  return (
    <>
      <Landing
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        isSClicked={isSClicked}
        setSIsClicked={setSIsClicked}
        isMClicked={isMClicked}
        setMIsClicked={setMIsClicked}
        isLClicked={isLClicked}
        setLIsClicked={setLIsClicked}
        isXLClicked={isXLClicked}
        setXLIsClicked={setXLIsClicked}
      />
    </>
  );
}

export default App;
