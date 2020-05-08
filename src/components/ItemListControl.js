import React from "react";
import SearchItemList from './SearchItemList';
import UserItemList from './UserItemList';
import NewElement from './NewElement'

class ItemListControl extends React.Component {
  constructor(props){
    super(props)
  }

  setVisibleComponent = () => {
    return (
      <>
      <div class='container'></div>
        <SearchItemList />
        <UserItemList />
        {/* <NewElement /> */}
      </>
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