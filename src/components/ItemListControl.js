import React from "react";
import StatCalculator from './StatCalculator';
import UserItemList from './UserItemList';
import SearchItemList from './SearchItemList';
import axios from 'axios'

class ItemListControl extends React.Component {
  constructor(props){
    super(props);

    this.state = {items: []};
  }

  componentDidMount() {
    axios.get('http://localhost:8080/getItems')
      .then(response => {
        this.setState({ items: response.data})
      })
      .catch((err) => {
        console.log(err);
      })
  }

  setVisibleComponent = () => {
    console.log("itemList", this.state.items)
    return (
      <div className='ItemLists'>
        <div id="left-box">
          <SearchItemList itemList={this.state.items}/>
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