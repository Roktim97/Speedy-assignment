import Categories from './Components/Category';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Topic from './Components/Topics';
import BlogEditor from './Components/BlogEditor';

function App() {
  return (
    <>
      <Categories/>
      <Routes>
        <Route path='/' element={<Topic data={{category: "all"}} />} />
        <Route path='/custom' element={<Topic data={{category: "custom"}} />} />
        <Route path='/icp' element={<Topic data={{category: "icp"}} />} />
        <Route path='/mission' element={<Topic data={{category: "mission"}} />} />
        <Route path='/product' element={<Topic data={{category: "product"}} />} />
        <Route path='/blog-editor' element={<BlogEditor />} />
      </Routes>
    </>
  );
}

export default App;
