import React from 'react';
import './App.css';
import Header from './Header';
import ItemListControl from './ItemListControl'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <ItemListControl />
      </div>
    </>
  );
}

export default App;
