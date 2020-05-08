import React from "react";
import PropTypes from "prop-types";

function SearchItemList(props) {
  console.log("SearchItemList props",props)
  return (
    <React.Fragment>
      <div className='SearchItemList'>
        <h2>Search Item List</h2>

        <label>Stamina</label>
        <input type="radio" id="stamina" name="statButton" value="purple" onClick = {() => props.colorChanger("purple") } />

        <label>Strength</label>
        <input type="radio" id="strength" name="statButton" value="red" onClick = {() => props.colorChanger("red") } />

        <label>Dexterity</label>
        <input type="radio" id="dexterity" name="statButton" value="green" onClick = {() => props.colorChanger("green") } />

        <label>Intelligence</label>
        <input type="radio" id="intelligence" name="statButton" value="blue" onClick = {() => props.colorChanger("blue") } />

        <label>Wisdom</label>
        <input type="radio" id="wisdom" name="statButton" value="yellow" onClick = {() => props.colorChanger("yellow") } />
        
        <div className='SearchListResults'>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

SearchItemList.propTypes =  {
  colorChanger: PropTypes.func
}

export default SearchItemList;