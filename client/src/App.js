import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import Home from './components/Home';
import Success from './components/Success';
import Err from './components/Err';

// class Purchase extends React.Component {

//     componentDidMount() {
//       fetch('/buy') 
//       .then(function(res) {
//         console.log(res)
//         window.location=res.url;
//       })
//       .catch(error => console.log(error) );
//     }

//     render() {
//       return (
//         <div>
//           <h1>Buy</h1>
//         </div>
//       )
//     }
// }

// const Success = () => {
//   return (
//     <div>
//       <h1>Success</h1>
//     </div>
//   )
// }

// const Err = () => {
//   return (
//     <div>
//       <h1>Error</h1>
//     </div>
//   )
// }

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        {/* <Route path="/purchase" component={Purchase}/> */}
        <Route path="/success" component={Success} />
        <Route path="/err" component={Err} />
        
      </BrowserRouter>
    );
  } 
}

export default App;
