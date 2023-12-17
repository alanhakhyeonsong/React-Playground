import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navigation/Navbar';
import Main from './pages/Main';
import { DefaultLayout } from './component/Layout/DefaultLayout';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Main />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
