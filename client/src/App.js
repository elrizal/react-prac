import React from 'react';
import './App.css';
import TemplateTheme from './components/TemplateTheme.jsx'
import Clock from './components/Clock';
function App() {
  return (
    <div className="App">
      <TemplateTheme>

      <div className="container">
      <Clock/>
      </div>
      </TemplateTheme>

    </div>
  );
}

export default App;
