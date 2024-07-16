import { Suspense, lazy, useContext } from "react";

const Loader = lazy(() => import("../components/Loader/Loader.jsx"));

import { SurveysContext } from "../context/Surveys.context.jsx";


const SurveysTable = ({surveys}) => {

    const { surveyLoading } = useContext(SurveysContext);

    const getDate = (date) => new Date(date).toLocaleString();

    return (
        <Suspense fallback={<Loader/>}>
            { surveyLoading && <Loader/> }
            <table className="w-full border border-white mt-6 rounded-lg">
                <thead className="bg-gray-800">
                    <tr className="border">
                        <th className="border p-2">Imagen</th>
                        <th className="border p-2">Temas</th>
                        <th className="border p-2">Titulo</th>
                        <th className="border p-2">Descripcion</th>
                        <th className="border p-2">Fecha de Inicio</th>
                        <th className="border p-2">Fecha de Fin</th>
                        <th className="border p-2">Perfil poblacional</th>
                        <th className="border p-2">Edad</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        surveys?.map(survey => (
                            <tr key={survey._id}>
                                <td className="border p-2">
                                    <div className="flex justify-center items-center">
                                        <img className="w-10 h-10 rounded-full" src={`${import.meta.env.VITE_UPLOAD_IMAGES_URL}/${survey.image}`} alt="" />
                                    </div>
                                </td>
                                <td className="border p-2">{survey.topic?.map(topic => topic.topicTitle)}</td>
                                <td className="border p-2">{survey.title}</td>
                                <td className="border p-2">{survey.description}</td>
                                <td className="border p-2 text-center">{getDate(survey.startDate)}</td>
                                <td className="border p-2 text-center">{getDate(survey.finishDate)}</td>
                                <td className="border p-2 text-center">{survey.gender}</td>
                                <td className="border p-2 text-center">{survey.age}</td>
                            </tr>
                        ))
                    }
                    <tr>
                    </tr>
                </tbody>
            </table>
        </Suspense>
    );
}

export default SurveysTable;
