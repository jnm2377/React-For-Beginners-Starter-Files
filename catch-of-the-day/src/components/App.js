import React from 'react';
import Header from './Header.js' //importing sibling component that is being used
import Inventory from './Inventory.js'
import Order from './Order.js'

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order/>
        <Inventory/>
      </div>
    )
  }
}

export default App;
