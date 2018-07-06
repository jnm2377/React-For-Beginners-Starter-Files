// FIRST: import dependencies
import React from 'react'; //importing the whole react package
import { getFunName } from '../helpers.js';

//SECOND: Build class for component (capitalize first letter)
class StorePicker extends React.Component {
  //REF - saves input values
  myInput = React.createRef();

  //EVENT HANDLER
  goToStore = (event) => {
    //1. stop the form from submitting
    event.preventDefault();
    //2. get the text from that input
    const storeName = this.myInput.value.value; //<--- accesses input values from ref!!!
    //3. change the page to the store they entered
    this.props.history.push(`/store/${storeName}`);
  }

  //RENDER
  render() {
    return (
      //from a render method, you can only return ONE parent element unless you use <React.Fragment></React.Fragment>
      //if you want to render CSS classes in React, use className
      <React.Fragment>
       { /* <p>This would be more than one parent element</p> */ }
        <form action="" className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          {/* INCLUDE REF IN INPUTS (SAVES INPUT VALUE TO REFERENCE LATER) */ }
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}/>
          <button type="submit">Visit Store</button>
        </form>
      </React.Fragment>
    )
  }
}

//export component so we can import in index.js with other dependencies
export default StorePicker;
