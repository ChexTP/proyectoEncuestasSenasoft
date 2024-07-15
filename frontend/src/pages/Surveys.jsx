import { Suspense, lazy, useState, useEffect } from "react";

const Loader = lazy(() => import("../components/Loader/Loader.jsx"));
const DashboardLayout = lazy(() => import("../layouts/Dashboard.layout.jsx"));
const SurveysTable = lazy(() => import("../components/SurveysTable.jsx"));

import { getAllSurveys } from "../services/surveys.services.js";

const Surveys = () => {

    document.title = "Encuestas - Encuestas Senasoft";

    const [surveys, setSurveys] = useState([]);

    useEffect(() => {
        
        const getSurveysSerice = async() => {
            try {
                
                const allSurvies = await getAllSurveys();
                setSurveys(allSurvies.data);

            } catch (error) {
                console.log(error);
            }
        }
        getSurveysSerice();

    }, []);

    return (
        <Suspense fallback={<Loader/>}>
            <DashboardLayout>
                <h1 className="text-3xl font-semibold">Encuestas</h1>
                <SurveysTable
                    surveys={surveys}
                />
            </DashboardLayout>
        </Suspense>
    );

}

export default Surveys;
