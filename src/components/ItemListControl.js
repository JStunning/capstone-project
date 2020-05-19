import React from "react";
import StatCalculator from './StatCalculator';
import UserItemList from './UserItemList';
import SearchItemList from './SearchItemList'

class ItemListControl extends React.Component {

  setVisibleComponent = () => {
    return (
      <div className='ItemLists'>
        <div id="left-box">
          <SearchItemList />
        </div>
        <div id="right-boxes">
        <UserItemList />
        <StatCalculator />
        </div>
      </div>
    )
  }
  render(){
    let currentView = this.setVisibleComponent();
    return (
      <>
      {currentView}
      </>
    )
  }
}

export default ItemListControl