import React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { Calendar } from '@progress/kendo-react-dateinputs';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello KendoReact!</h1>
      <Calendar />
    </div>
  );
}

export default App;
