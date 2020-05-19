import React from "react";

function UserItemList() {
  return (
    <React.Fragment>
      <div className='UserItemList'>
        <h2>User Item List</h2><br />
        <div id='AllUserItems'>
        <div id='LeftUserItems'>
            <p>Head slot</p>
            <img src={require('../images/inventoryslot_head.jpg')} alt="head slot" />
            <p>Neck slot</p>
            <img src={require('../images/inventoryslot_neck.jpg')} alt="neck slot" />
            <p>Shoulder slot</p>
            <img src={require('../images/inventoryslot_shoulder.jpg')} alt="shoulder slot" />
            <p>Back slot</p>
            <img src={require('../images/inventoryslot_chest.jpg')} alt="back slot" />
            <p>Chest slot</p>
            <img src={require('../images/inventoryslot_chest.jpg')} alt="chest slot" />
            <p>Wrist slot</p>
            <img src={require('../images/inventoryslot_wrists.jpg')} alt="wrist slot" />
          </div>
          <div id='BottomUserItems'>
            <p>Main-hand slot</p>
            <img src={require('../images/inventoryslot_mainhand.jpg')} alt="main hand slot" />
            <p>Off-hand slot</p>
            <img src={require('../images/inventoryslot_offhand.jpg')} alt="off hand slot" />
            <p>Ranged slot</p>
            <img src={require('../images/inventoryslot_ranged.jpg')} alt="ranged slot" />
          </div>
          <div id='RightUserItems'>
            <p>Hand slot</p>
            <img src={require('../images/inventoryslot_hands.jpg')} alt="hands slot" />
            <p>Waist slot</p>
            <img src={require('../images/inventoryslot_waist.jpg')} alt="waist slot" />
            <p>Legs slot</p>
            <img src={require('../images/inventoryslot_legs.jpg')} alt="legs slot" />
            <p>Feet slot</p>
            <img src={require('../images/inventoryslot_feet.jpg')} alt="feet slot" />
            <p>Trinket1 slot</p>
            <img src={require('../images/inventoryslot_trinket.jpg')} alt="trinket1 slot" />
            <p>Trinket2 slot</p>
            <img src={require('../images/inventoryslot_trinket.jpg')} alt="trinket2 slot" />
            <p>Ring1 slot</p>
            <img src={require('../images/inventoryslot_finger.jpg')} alt="finger1 slot" />
            <p>Ring2 slot</p>
            <img src={require('../images/inventoryslot_finger.jpg')} alt="finger2 slot" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserItemList;