import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import AddTodo from "./pages/AddTodo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=""></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/add-Todo" element={<AddTodo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
