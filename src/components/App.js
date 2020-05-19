import React from 'react';
import './App.css';
import Header from './Header';
import ItemListControl from './ItemListControl'
import SearchItemList from './SearchItemList'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <SearchItemList />
        <ItemListControl />
      </div>
    </>
  );
}

export default App;
