import React from "react";

function Header() {
  return (
    <React.Fragment>
      <div className='Header'>
        <img src={require('../images/logo.png')} alt="logo" id="logo" />
        <h2>l</h2>
        <ul>
          <li>About</li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Header;