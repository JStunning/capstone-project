import React from "react";
import StatCalculator from './StatCalculator';
import UserItemList from './UserItemList';

class ItemListControl extends React.Component {

  setVisibleComponent = () => {
    return (
      <div className='ItemLists'>
        <UserItemList />
        <StatCalculator />
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