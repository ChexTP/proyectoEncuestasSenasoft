import { Suspense, lazy } from "react";

const Loadrer = lazy(() => import("../components/Loader/Loader.jsx"));
const DashboardLayout = lazy(() => import("../layouts/Dashboard.layout.jsx"))

const Topics = () => {
    return (
        <Suspense fallback={<Loadrer/>}>
            <DashboardLayout>
                <h1>Topics</h1>
            </DashboardLayout>
        </Suspense>
    );
}

export default Topics;