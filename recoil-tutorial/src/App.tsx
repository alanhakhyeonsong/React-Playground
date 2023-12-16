import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navigation/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
    </BrowserRouter>
  );
}

export default App;
