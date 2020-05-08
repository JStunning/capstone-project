import React from 'react';
import './App.css';
import Header from './Header';
import ItemListControl from './ItemListControl'
import StatCalculator from './StatCalculator'


let state = {
  color: 'orange'
}

const onRadioButtonChangeHandler = () => {
  state.color = 'blue'
  setStateColor();
};

const setStateColor = () => {
  return state.color;
}

let styleObject = {
  background: setStateColor()
}

console.log("styleobj",styleObject.background)

function App() {
  return (
    <>
      <Header />
      <div className="container" style={styleObject}>
        <ItemListControl colorChanger={onRadioButtonChangeHandler}/>
        <StatCalculator />
      </div>
    </>
  );
}

export default App;
