
const SurveysTable = ({surveys}) => {

    const getDate = (date) => new Date(date).toLocaleDateString();

    return (
        <table className="w-full border mt-6">
            <thead className="bg-gray-800">
                <tr className="border">
                    <th className="border p-2">Imagen</th>
                    <th className="border p-2">Titulo</th>
                    <th className="border p-2">Descripcion</th>
                    <th className="border p-2">Fecha de Inicio</th>
                    <th className="border p-2">Fecha de Fin</th>
                    <th className="border p-2">Perfil poblacional</th>
                </tr>
            </thead>
            <tbody>
                {
                    surveys?.map(survey => (
                        <tr key={survey._id}>
                            <td className="p-2 flex justify-center items-center">
                                <img className="w-10 h-10" src={`${import.meta.env.VITE_UPLOAD_IMAGES_URL}/${survey.image}`} alt="" />
                            </td>
                            <td className="border p-2">{survey.title}</td>
                            <td className="border p-2">{survey.description}</td>
                            <td className="border p-2 text-center">{getDate(survey.startDate)}</td>
                            <td className="border p-2 text-center">{getDate(survey.finishDate)}</td>
                            <td className="border p-2 text-center">{survey.gender}</td>
                        </tr>
                    ))
                }
                <tr>
                </tr>
            </tbody>
        </table>
    );
}

export default SurveysTable;
