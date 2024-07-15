
const SurveysTable = ({survey}) => {

    const getDate = (date) => new Date(date); 

    return (
        <table>
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Titulo</th>
                    <th>Descripcion</th>
                    <th>Fecha de Inicio</th>
                    <th>Fecha de Fin</th>
                    <th>Perfil poblacional</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                </tr>
            </tbody>
        </table>
    );
}

export default SurveysTable;
