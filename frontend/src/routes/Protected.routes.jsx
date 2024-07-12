import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import Loader from "../components/Loader/Loader.jsx";

import { AuthContext } from "../context/Auth.context.jsx";

const ProtectedRoutes = () => {

    const { loading, isAuthenticated } = useContext(AuthContext);

    if (loading) return <Loader/>
    if(!loading && !isAuthenticated) return <Navigate to="/login" replace/>
    
    return <Outlet/>;
}

export default ProtectedRoutes;
