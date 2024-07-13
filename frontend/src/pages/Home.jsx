import { useContext, Suspense, lazy } from "react";

import { AuthContext } from "../context/Auth.context.jsx";

const DashboardLayout = lazy(() => import("../layouts/Dashboard.layout.jsx"));
const Loader = lazy(() => import("../components/Loader/Loader.jsx"));

const Home = () => {

    document.title = "Home - Encuestas Senasoft";

    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <Suspense fallback={<Loader/>}>
            <DashboardLayout
                user={{ fullName: `${user.firstName} ${user.lastName}`}}
            >
                <h1>Hola mundo</h1>
            </DashboardLayout>
        </Suspense>
    );
}

export default Home;
