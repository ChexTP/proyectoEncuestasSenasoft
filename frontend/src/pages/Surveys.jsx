import { Suspense, lazy } from "react";

const Loader = lazy(() => import("../components/Loader/Loader.jsx"));
const DashboardLayout = lazy(() => import("../layouts/Dashboard.layout.jsx"));
const SurveysTable = lazy(() => import("../components/SurveysTable.jsx"));


const Surveys = () => {

    document.title = "Encuestas - Encuestas Senasoft";

    return (
        <Suspense fallback={<Loader/>}>
            <DashboardLayout>
                <h1 className="text-3xl font-semibold">Encuestas</h1>
            </DashboardLayout>
        </Suspense>
    );

}

export default Surveys;
