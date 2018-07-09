import React from 'react';
import Header from './Header.js'; //importing sibling component that is being used
import Inventory from './Inventory.js';
import Order from './Order.js';
import fishes from '../sample-fishes';
import Fish from './Fish.js';
import base from '../base';

class App extends React.Component {
  //INITIAL STATE
  state = {
    //***ORIGINAL FISHES***
    fishes: {},
    order: {}
  };


//LIFECYCLE METHOD
  componentDidMount() {
    // firebase stuff
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  //UPDATING STATE
  addFish = (fish) => {
    //1. take a copy of the existing state
    //***COPY OF OG FISHES***
    const fishes = { ...this.state.fishes };
    //2. add our new fish to that fishes variable
    //***NEW FISHES***
    fishes[`fish${Date.now()}`] = fish; //value of fish that got passed in parameter
    //3. Set the new fishes object to state
    this.setState({
      //**MAKING OLD FISHES = NEW FISHES***
      fishes: fishes
    })
  }

  loadSampleFishes = () => {
    this.setState({fishes: fishes});
  }

  addToOrder = (key) => {
    // 1. take a copy of state
    const order = { ...this.state.order};
    // 2. add to order or update number in our order
    order[key] = order[key] + 1 || 1;
    // 3. call setState to update our state obj
    this.setState({order});
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            {console.log(this.state.fishes)}
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                id={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
        {/* ^^^Added prop for updating state to be accessed in this component class (Ineventory.js)*/}
      </div>
    )
  }
}

export default App;
