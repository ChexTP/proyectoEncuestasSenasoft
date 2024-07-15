import { Suspense, lazy } from "react";

const DashboardLayout = lazy(() => import("../layouts/Dashboard.layout.jsx"));
const Loader = lazy(() => import("../components/Loader/Loader.jsx"));

const Home = () => {

    document.title = "Home - Encuestas Senasoft";

    return (
        <Suspense fallback={<Loader/>}>
            <DashboardLayout>
                <h1>Hola mundo</h1>
            </DashboardLayout>
        </Suspense>
    );
}

export default Home;
