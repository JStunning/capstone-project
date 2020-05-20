import React from "react";
import PropTypes from "prop-types";

function SearchItemList(props) {
  return (
    <React.Fragment>
      <div className='SearchItemList'>
        <h2>Search Item List</h2>

        <label>Stamina</label>
        <input type="radio" id="stamina" name="statButton" value="purple" />

        <label>Strength</label>
        <input type="radio" id="strength" name="statButton" value="red" />

        <label>Dexterity</label>
        <input type="radio" id="dexterity" name="statButton" value="green" />

        <label>Intelligence</label>
        <input type="radio" id="intelligence" name="statButton" value="blue" />

        <label>Wisdom</label>
        <input type="radio" id="wisdom" name="statButton" value="yellow" />
        
        <div className='SearchListResults'>
          <ul>
          {/* {props.itemList.map((item) => 
            <li>{item}</li>
          )} */}
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

SearchItemList.propTypes = {
  itemList: PropTypes.array
};

export default SearchItemList;