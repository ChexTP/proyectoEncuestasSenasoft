import { Suspense, lazy } from 'react';

const Loader = lazy(() => import("../components/Loader/Loader.jsx"));
const FormRegister = lazy(() => import("../components/FormRegister.jsx"));

const Register = () => {

    document.title = "Registrate - Encuestas Senasoft";

    return (
        <Suspense fallback={<Loader/>}>
            <div className="w-screen flex justify-center items-center bg-login-bg bg-no-repeat bg-cover py-24">
                <FormRegister/>
            </div>
        </Suspense>
    );
}

export default Register;
