import { Suspense, lazy } from "react";

const Loader = lazy(() => import("../components/Loader/Loader.jsx"));
const FormLogin = lazy(() => import("../components/FormLogin.jsx"));


const Login = () => {

    document.title = "Ingresar - Encuestas Senasoft";

    return (
        <Suspense fallback={<Loader/>}>
            <div className="w-screen h-screen flex justify-center items-center bg-login-bg bg-no-repeat bg-cover">
                <FormLogin/>
            </div>
        </Suspense>
    );
}

export default Login;
