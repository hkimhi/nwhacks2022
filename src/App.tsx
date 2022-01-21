import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home/>} />
          <Route path ="/home" element={<Home/>} />

          <Route path="*" element={<Navigate to="/home"/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
