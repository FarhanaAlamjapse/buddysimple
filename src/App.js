
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import PostDetail from './components/PostDetail/PostDetail';


function App() {
  
  return (
    <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/home">Home2</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
     
    <Routes>
       <Route exact path="/" element={<Home />} />
       <Route  path="/home" element={<Home />} />
       <Route  path="/about" element={<About/>} />
       <Route  path="/dashboard" element={<Dashboard/>} />
       <Route path="/post/:id" element={<PostDetail/>}/>
       
    </Routes> 
    </BrowserRouter>
    
  );
}

export default App;
