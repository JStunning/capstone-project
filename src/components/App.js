import React from 'react';
import './App.css';
import Header from './Header';
import ItemListControl from './ItemListControl'
import StatCalculator from './StatCalculator'


let state = {
  color: 'orange'
}

const onRadioButtonChangeHandler = () => {
  document.querySelector("body").style.background = "red"
};

// let styleObj = {
//   document.querySelector("body").style.background = "red"
// }

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
    </>
  );
}

export default App;
