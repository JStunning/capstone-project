import React from "react";

function StatCalculator() {
  return (
    <React.Fragment>
      <div className='StatCalculator'>
        <h2>Stat Calculator</h2>
        <ul>
          <div>
            <li>Stamina</li>
            <p>numbers</p>
          </div>
          <div>
            <li>Strength</li>
            <p>numbers</p>
          </div>
          <div>
            <li>Dexterity</li>
            <p>numbers</p>
          </div>
          <div>
            <li>Intelligence</li>
            <p>numbers</p>
          </div>
          <div>
            <li>Wisdom</li>
            <p>numbers</p>
          </div>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default StatCalculator;