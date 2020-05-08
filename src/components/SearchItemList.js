import React from "react";

function SearchItemList() {
  return (
    <React.Fragment>
      <div className='SearchItemList'>
        <h2>Search Item List</h2>

        <label for="stamina">Stamina</label>
        <input type="radio" id="stamina" name="stamina" value="stamina" />

        <label for="strength">Strength</label>
        <input type="radio" id="strength" name="strength" value="strength" />

        <label for="dexterity">Dexterity</label>
        <input type="radio" id="dexterity" name="dexterity" value="dexterity" />

        <label for="intelligence">Intelligence</label>
        <input type="radio" id="intelligence" name="intelligence" value="intelligence" />

        <label for="wisdom">Wisdom</label>
        <input type="radio" id="wisdom" name="wisdom" value="wisdom" />
        
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