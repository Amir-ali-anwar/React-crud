import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import AddTodo from "./pages/AddTodo";
import AllTodo from './pages/AllTodo'
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedLayout from './components/sharedLayout'
import { Sidebar } from "./components";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/add-Todo" element={<AddTodo />}></Route>
          <Route path="/all-Todo" element={<AllTodo />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
