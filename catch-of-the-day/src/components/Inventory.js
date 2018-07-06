import React from 'react';
import AddFishForm from './AddFishForm.js';

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish}/>
        {/* ^^^Added parent prop for updating state to be accessed in this component class (AddFishForm.js)*/}
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
