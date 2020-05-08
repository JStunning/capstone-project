import React from 'react';
import './App.css';
import Header from './Header';
import SearchItemList from './SearchItemList';
import UserItemList from './UserItemList';
import StatCalculator from './StatCalculator'

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <SearchItemList />
        <UserItemList />
        <StatCalculator />
      </div>
    </>
  );
}

export default App;
