import React from "react";

function SearchItemList() {
  return (
    <React.Fragment>
      <div className='SearchItemList'>
        <h2>Search Item List</h2>

        <label for="stamina">Stamina</label>
        <input type="radio" id="stamina" name="statButton" value="stamina" />

        <label for="strength">Strength</label>
        <input type="radio" id="strength" name="statButton" value="strength" />

        <label for="dexterity">Dexterity</label>
        <input type="radio" id="dexterity" name="statButton" value="dexterity" />

        <label for="intelligence">Intelligence</label>
        <input type="radio" id="intelligence" name="statButton" value="intelligence" />

        <label for="wisdom">Wisdom</label>
        <input type="radio" id="wisdom" name="statButton" value="wisdom" />
        
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default SearchItemList;