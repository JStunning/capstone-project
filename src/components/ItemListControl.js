import React from "react";
import SearchItemList from './SearchItemList';
import UserItemList from './UserItemList';
import NewElement from './NewElement'

class ItemListControl extends React.Component {
  constructor(props){
    super(props)
  }

  setVisibleComponent = () => {
    // const containerDiv = document.querySelector('.container');
    // const card = newElement('div', {class: 'card'})
    // containerDiv.appendChild(card);
    return (
      <div className='ItemLists'>
        <SearchItemList />
        <UserItemList />
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