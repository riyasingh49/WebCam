import { useState } from "react";
import "./App.css";
import AllCameras from './AllCameras.jsx';
import Navbar from "./Navbar.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    
      <div className="App">
        <Navbar/>
        <AllCameras/>
      </div>
    
  );
}

export default App;
