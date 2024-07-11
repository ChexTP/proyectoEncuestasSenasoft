import { useNavigate } from "react-router-dom";


const FormLogin = () => {


    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/");
    }

    
    return (
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit()
            }}
            className="space-y-6"
        >
            <div>
                <h5 className="text-2xl font-medium text-gray-900 dark:text-white">Bienvenido de vuelta!</h5>
                <p>Te estabamos esperando.</p>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Correo Eléctronico *</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:placeholder-gray-400 dark:text-white" placeholder="nombre@gmail.com" required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña *</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <button type="submit" className="w-full text-white transition-all bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ingresar a tu cuenta</button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                <p>¿No estás registrado? <a href="#" className="text-gray-900 hover:underline dark:text-blue-500">Crea una cuenta</a></p>
            </div>
        </form>
    </div>
    );
}

export default FormLogin;
