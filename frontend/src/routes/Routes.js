import React, { Suspense } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const RoutesSwitch = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route index path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default RoutesSwitch;