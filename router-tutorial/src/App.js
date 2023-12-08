import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Articles from './pages/Articles';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Layout from './layouts/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile/>} />
      </Route>
      <Route path="/articles" element={<Articles/>}>
        <Route path=":id" element={<Article/>} />
      </Route>
      <Route path="/login" element={<Login/>} />
      <Route path="/mypage" element={<MyPage/>} />
      <Route path="/*" element={<NotFound/>} />
    </Routes>
  );
};

export default App;
