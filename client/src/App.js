import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import './App.css';

function App() {
  return (
    // <div>
    //   <img src="video" width="50%" height="50%"/>
    //   <h1>My token is {window.token}</h1>
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
