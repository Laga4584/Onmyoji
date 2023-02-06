import './App.css';
import Navbar from './containers/Navbar';
import Leftbar from './containers/Leftbar';
import Rightbar from './containers/Rightbar';
import Home from './components/Home';
import Story from './components/Story';
import Character from './containers/Character';
import Gallery from './containers/Gallery';
import Script from './components/Script';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useRef } from 'react';


function App() {
  const mouseRef = useRef(null);
  // 마우스 물결 효과
  const MouseRipple = (e) => {
    mouseRef.current.style.left = e.pageX - 16  + 'px';
    mouseRef.current.style.top= e.pageY - 16  + 'px';
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App" onMouseMove={MouseRipple}>
        <div className="ripple" ref={mouseRef}></div>
      
        <Navbar></Navbar>
        <Leftbar></Leftbar>
        <Rightbar></Rightbar>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/character" element={<Character />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/script" element={<Script />} />
        </Routes>
          
      </div>
    </Router>
  );
}

export default App;
