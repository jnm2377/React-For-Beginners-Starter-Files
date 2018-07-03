// FIRST: import dependencies
import React from 'react'; //importing the whole react package
import { getFunName } from '../helpers.js';

//SECOND: Build class for component (capitalize first letter)
//Every component that we have is going to be it's own class
class StorePicker extends React.Component {
//every class needs a method called render inside
  render() {
    return (
      //from a render method, you can only return ONE parent element unless you use <React.Fragment></React.Fragment>
      //if you want to render CSS classes in React, use className
      <React.Fragment>
       { /* <p>This would be more than one parent element</p> */ }
        <form action="" className="store-selector">
          <h2>Please Enter A Store</h2>
          <input type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
          <button type="submit">Visit Store</button>
        </form>
      </React.Fragment>
    )
  }
}

//export component so we can import in index.js with other dependencies
export default StorePicker;
