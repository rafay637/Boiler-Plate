import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Dashboard from "./DashboardScreens/Dashboard";
import Login from "../firebase/login";
import Signup from "../Firebase/SignUp";
import ProtectRoutes from "../Components/ProtectedRoute";

function AllRouters() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/Dashboard/*" element={<ProtectRoutes Component={<Dashboard />} />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default AllRouters;