import React from "react";
import StatCalculator from './StatCalculator';
import UserItemList from './UserItemList';
import SearchItemList from './SearchItemList';
import axios from 'axios'

class ItemListControl extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      items: [],
      filteredItems: {items: this.items}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/getItems')
      .then(response => {
        this.setState({ 
          items: response.data,
          filteredItems: response.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  //filter ItermList function
  // filter items based on input
  // push filtered list to this.state
  // pass filtered list to search item list

  filterItemList = (num) => {
    if(this.state.filteredItems === []){
      this.setState({ filteredItems: this.state.items[0]})
    } else {
      console.log("filteredItems ", this.state.filteredItems)
      this.setState({ filteredItems: this.state.items[num]})
    }
  }

  setVisibleComponent = () => {
    console.log("itemList", this.state.items)
    return (
      <div className='ItemLists'>
        <div id="left-box">
          <SearchItemList itemList={this.state.filteredItems.items}/>
        </div>
        <div id="right-boxes">
          <UserItemList filterList={this.filterItemList} />
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