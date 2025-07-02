import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import PostList from './pages/PostList';
import PostForm from './pages/PostForm';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>글 목록</Link> | <Link to='/write'>글 작성</Link>
      </nav>
      <Routes>
        <Route path='/' element={<PostList />} />
        <Route path='/write' element={<PostForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
