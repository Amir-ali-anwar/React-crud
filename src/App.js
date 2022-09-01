import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import AddTodo from "./pages/AddTodo";
import AllTodo from './pages/AllTodo'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=""></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/add-Todo" element={<AddTodo />}></Route>
        <Route path="/all-Todo" element={<AllTodo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
