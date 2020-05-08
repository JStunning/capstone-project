import React from "react";
import PropTypes from "prop-types";
import SearchItemList from './SearchItemList';
import UserItemList from './UserItemList';

class ItemListControl extends React.Component {
  constructor(props){
    super(props)

  }


  setVisibleComponent = () => {
    console.log("ItemListControl props", this.props);
    return (
      <div className='ItemLists'>
        <SearchItemList colorChanger={this.props.colorChanger}/>
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

ItemListControl.propTypes = {
  colorChanger: PropTypes.func
};

export default ItemListControl