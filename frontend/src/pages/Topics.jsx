import { Suspense, lazy, useEffect, useState } from "react";

const Loadrer = lazy(() => import("../components/Loader/Loader.jsx"));
const DashboardLayout = lazy(() => import("../layouts/Dashboard.layout.jsx"))
const Button = lazy(() => import("../components/Button.jsx"));
const TopicsTable = lazy(() => import("../components/TopicsTable.jsx"));

import { getAllTopics } from "../services/topics.services.js";

const Topics = () => {

    const [topics, setTopics] = useState([]);

    useEffect(() => {
        const getTopicsService = async () => {
            try {
                const response = await getAllTopics();
                setTopics(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getTopicsService();
    }, []);


    return (
        <Suspense fallback={<Loadrer/>}>
            <DashboardLayout>
                <div className="flex justify-between">
                    <h1 className="text-3xl font-semibold">Temas</h1>
                    <Button
                        text="Agregar Tema"
                        background="bg-green-500"
                        textColor="text-white"
                        // onclick={() => setSurveysModalState(true)}
                    />
                </div>
                <TopicsTable topics={topics}/>
            </DashboardLayout>
        </Suspense>
    );
}

export default Topics;