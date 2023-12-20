import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './page/HomePage';
import Login from './page/auth/login.jsx';
import SignUp from "./page/auth/signup.jsx"
import FormPage from './page/form.jsx';
import { Toaster } from "react-hot-toast";
import BatchUpdateForm from "./page/updateBatch.jsx"
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/form" element={<FormPage />} />
    <Route path="/update" element={<BatchUpdateForm />} />

     </Routes>
     <Toaster />
   </>
  );
}

export default App;
