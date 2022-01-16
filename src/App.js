import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home"
import Todo from './components/Todo'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home/>} />
          <Route path ="/home" element={<Home/>} />
          <Route path='/todo' element={<Todo />} />

          <Route path="*" element={<Navigate to="/home"/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
