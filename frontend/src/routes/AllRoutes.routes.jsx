import { Suspense, lazy, useContext } from "react";
import { Routes, Route } from "react-router-dom";

const ProtectedRoutes = lazy(() => import("../routes/Protected.routes.jsx"));

const Login = lazy(()=> import("../pages/Login.jsx"));
const Register = lazy(()=> import("../pages/Register.jsx"));
const Loader = lazy(() => import("../components/Loader/Loader.jsx"));
const Home = lazy(()=> import("../pages/Home.jsx"));
const Surveys = lazy(()=> import("../pages/Surveys.jsx"));
const Topics = lazy(()=> import("../pages/Topics.jsx"));

import SurveysContextProvider from "../context/Surveys.context.jsx";
import TopicsContextProvider from "../context/Topics.context.jsx";

const AllRoutes = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route element={<ProtectedRoutes/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/surveys" element={
                        <SurveysContextProvider>
                            <Surveys/>
                        </SurveysContextProvider>
                    }/>
                    <Route path="/topics" element={
                        <TopicsContextProvider>
                            <Topics/>
                        </TopicsContextProvider>
                    }/>
                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </Suspense>
    );
}

export default AllRoutes;
