
const TopicsTable = ({topics}) => {

    return (
        <table className="w-full border border-white mt-6 rounded-lg">
            <thead className="bg-gray-800">
                <tr className="border">
                    <th className="border p-2 w-[30%]">ID</th>
                    <th className="border p-2 w-[70%]">Titulo</th>
                </tr>
            </thead>
            <tbody>
                {
                    topics?.map(topic => (
                        <tr key={topic._id}>
                            <td className="border p-2 text-center">{topic._id}</td>
                            <td className="border p-2 text-center">{topic.topicTitle}</td>
                        </tr>
                    ))
                }
                <tr>
                </tr>
            </tbody>
        </table>
    );
}

export default TopicsTable;
