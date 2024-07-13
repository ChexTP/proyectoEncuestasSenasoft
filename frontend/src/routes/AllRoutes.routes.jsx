import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const ProtectedRoutes = lazy(() => import("../routes/Protected.routes.jsx"));

const Login = lazy(()=> import("../pages/Login.jsx"));
const Register = lazy(()=> import("../pages/Register.jsx"));
const Home = lazy(()=> import("../pages/Home.jsx"));
const Loader = lazy(() => import("../components/Loader/Loader.jsx"));


const AllRoutes = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route element={<ProtectedRoutes/>}>
                    <Route path="/" element={<Home/>}/>
                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </Suspense>
    );
}

export default AllRoutes;
