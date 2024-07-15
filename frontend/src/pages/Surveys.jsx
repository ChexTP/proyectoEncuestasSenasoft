import { Suspense, lazy, useState, useEffect, useContext } from "react";

// comoponents
const Loader = lazy(() => import("../components/Loader/Loader.jsx"));
const DashboardLayout = lazy(() => import("../layouts/Dashboard.layout.jsx"));
const SurveysTable = lazy(() => import("../components/SurveysTable.jsx"));
const Button = lazy(() => import("../components/Button.jsx"));
const SurveysForm = lazy(() => import("../components/SurveysForm.jsx"));

import { SurveysContext } from "../context/Surveys.context.jsx";

// services
import { getAllSurveys } from "../services/surveys.services.js";

const Surveys = () => {

    document.title = "Encuestas - Encuestas Senasoft";

    const [surveys, setSurveys] = useState([]);

    const { surveysModalState, setSurveysModalState } = useContext(SurveysContext);
    console.log(surveysModalState);

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

                    <div className="flex justify-between">
                        <h1 className="text-3xl font-semibold">Encuestas</h1>
                        <Button
                            text="Agregar Encuesta"
                            background="bg-green-500"
                            textColor="text-white"
                            onclick={() => setSurveysModalState(true)}
                            />
                    </div>
                    {
                        surveysModalState && <SurveysForm />
                    }
                    
                    <SurveysTable surveys={surveys} />
            </DashboardLayout>
        </Suspense>
    );

}

export default Surveys;
