import React from 'react'
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import AddTodo from "./pages/AddTodo";
import AllTodo from './pages/AllTodo'
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedLayout from './components/sharedLayout'
import  Edit from './pages/Edit'
function App() {
  const [user,SetUser]=React.useState('')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Login />}></Route>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index path="/add-Todo" element={<AddTodo />}></Route>
          <Route path="/all-Todo" element={<AllTodo />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
