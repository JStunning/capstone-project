import React from 'react';
import './App.css';
import Header from './Header';
import ItemListControl from './ItemListControl'
import StatCalculator from './StatCalculator'
import About from './About'


let state = {
  color: 'orange'
}

const onRadioButtonChangeHandler = (color) => {
  ChangeBackground(color)
};

let styleObj = {
  background: 'red'
}

const ChangeBackground = (color) => {
  console.log(color)
  return {
    background: color
  }
}

function App() {
  return (
    <>
      <Header />
      <div className="container" style={onRadioButtonChangeHandler()}>
        <ItemListControl colorChanger={onRadioButtonChangeHandler}/>
        <StatCalculator />
      </div>
      <About />
    </>
  );
}

export default App;
