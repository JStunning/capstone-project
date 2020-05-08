import React from 'react';
import './App.css';
import Header from './Header';
import ItemListControl from './ItemListControl'
import StatCalculator from './StatCalculator'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <ItemListControl />
        <StatCalculator />
      </div>
    </>
  );
}

export default App;
