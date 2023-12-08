import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>메인 페이지</p>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/profiles/Ramos'>라모스</Link>
        </li>
        <li>
          <Link to='/profiles/Geomma'>검마</Link>
        </li>
        <li>
          <Link to='/profiles/void'>없는 프로필</Link>
        </li>
        <li>
          <Link to='/articles'>게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;