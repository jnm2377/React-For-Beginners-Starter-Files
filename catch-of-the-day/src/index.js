// FIRST: import dependencies
import React from 'react'; //importing the whole react package
import { render } from 'react-dom'; //we don't need the entire react-dom package, just one of the methods
import Router from './components/Router.js' //path for our component
import './css/style.css'; //importing our CSS for components

//SECOND: Build class for component (capitalize first letter)
//included in src > components > storepicker.js

// THEN: render component
render(<Router/>, document.querySelector('#main')); //component has to be self closing!
