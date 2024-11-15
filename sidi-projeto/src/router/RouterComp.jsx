import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login/index'
import Home from '../pages/Home/index'
import Register from "../pages/Register"
import ForgotPassaword from '../pages/Esqueceu'


export default function RouterComp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/esqueceu" element={<ForgotPassaword />} />
                
                
            </Routes>
        </BrowserRouter>
    );
}
