
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import UploadPost from './pages/uploadPost';
import PostDetail from './pages/detailPost';
import Tabsmenu from './component/TabUI';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Tabsmenu />} />
          {/* <Route path="/listing" element={<PostList />} /> */}
          <Route path="/detail/:id" element={<PostDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
