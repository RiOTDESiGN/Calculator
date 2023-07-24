import React, { useState } from 'react';
import './App.css';
import Calculator from './Calculator';

const themes = ['theme1', 'theme2', 'theme3'];

function App() {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  const toggleTheme = () => {
    setCurrentThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  return (
    <div className={`app ${themes[currentThemeIndex]}`}>
      <div className='titletheme'>
        <h1>Calculator</h1>
        <div><button className='toggle' onClick={toggleTheme}>Theme</button></div>
      </div>
      <Calculator />
    </div>
  );
}

export default App;
