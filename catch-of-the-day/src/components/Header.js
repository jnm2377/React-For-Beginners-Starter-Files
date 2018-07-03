import React from 'react';

//STATELESS FUNCTIONAL COMPONENT
//function does the same thing as regular react component (line 21)
const Header = (props) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span> {/* importing prop from App.js > line 11 */}
    </h3>
  </header>
);

//REGULAR REACT COMPONENT
// class Header extends React.Component {
//   render() {
//     return (
//       <header className="top">
//         <h1>
//           Catch
//           <span className="ofThe">
//             <span className="of">Of</span>
//             <span className="the">The</span>
//           </span>
//           Day
//         </h1>
//         <h3 className="tagline">
//           <span>{this.props.tagline}</span> {/* importing prop from App.js > line 11 */}
//         </h3>
//       </header>
//     )
//   }
// }

export default Header;
//will be imported into App.js component file, where this component is being used
