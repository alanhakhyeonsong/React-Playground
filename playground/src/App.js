import './App.css';
import React, { Component } from 'react';
import MyComponent from './components/MyComponent';

// function App() {
//   const name = 'React Study'
//   return (
//     <div className="react">
//       {name}
//     </div>
//   );
// }

class App extends Component {
  render() {
    const name = 1;
    // return <div className="react">{name}</div>
    return <MyComponent name="props test">{name}</MyComponent>
  }
}

export default App;
