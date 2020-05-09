import React from "react";

function UserItemList() {
  return (
    <React.Fragment>
      <div className='UserItemList'>
        <h2>User Item List</h2><br />
        <div id='AllUserItems'>
        <div id='LeftUserItems'>
            <p>Head slot</p>
            <p>Neck slot</p>
            <p>Shoulder slot</p>
            <p>Back slot</p>
            <p>Chest slot</p>
            <p>Wrist slot</p>
          </div>
          <div id='BottomUserItems'>
            <img src='../images/Equipment-page.png' alt='equipment page'></img>
            <p>Main-hand slot</p>
            <p>Off-hand slot</p>
          </div>
          <div id='RightUserItems'>
            <p>Gloves slot</p>
            <p>Waist slot</p>
            <p>Legs slot</p>
            <p>Boots slot</p>
            <p>Trinket1 slot</p>
            <p>Trinket2 slot</p>
            <p>Ring1 slot</p>
            <p>Ring2 slot</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserItemList;