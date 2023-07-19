import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/create" element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
