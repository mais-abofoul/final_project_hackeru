import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route,Link,Routes} from 'react-router-dom'
import Register from './component/Register';
import Login from './component/Login';
import Post from './component/Post';
import AddPost from './component/AddPost';
import About from './component/About';


function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/posts" element={<Post/>} />
          <Route exact path="/add-post" element={<AddPost/>} />
          <Route exact path="/about" element={<About/>} />
        </Routes>
      </Router>
  );
}


export default App;
