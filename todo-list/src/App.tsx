// import React from 'react';
// import MyComponent from './components/MyComponent';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <MyComponent name="Ramos">test</MyComponent>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default class App extends Component {
  render() {
    return(
      <div className="container">
        <TodoHeader>
          <TodoInput />
        </TodoHeader>
        <TodoList />
      </div>
    )
  }
}