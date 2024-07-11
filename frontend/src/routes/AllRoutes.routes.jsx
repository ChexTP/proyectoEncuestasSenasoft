import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";


const Login = lazy(()=> import("../pages/Login.jsx"));
const Home = lazy(()=> import("../pages/Home.jsx"));


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="login/" element={<Login/>}/>
        </Routes>
    );
}

export default AllRoutes;
