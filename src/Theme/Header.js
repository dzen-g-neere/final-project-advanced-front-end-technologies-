import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Header;