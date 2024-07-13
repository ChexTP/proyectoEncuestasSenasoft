import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

import { AuthContext } from "../context/Auth.context.jsx";

import { login } from "../services/auth.services.js";

const FormLogin = () => {

    const navigate = useNavigate();
    const { setUser, setIsAuthenticated, setLoading } = useContext(AuthContext);

    const { register, handleSubmit, formState: {errors} } = useForm();

    const handleLogin = handleSubmit(async(data) => {
        try {
            const loginResponse = await login(data);

            if (loginResponse.status === 200) {
                setLoading(false);
                setUser(loginResponse.data);
                setIsAuthenticated(true);
                navigate("/");
            } else{
                toast.error("Las credenciales son incorrectas!");
            }

        } catch (error) {
            console.log(error);
        }
    })
    
    return (
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <ToastContainer/>
            <form
                onSubmit={handleLogin}
                className="space-y-6"
            >
                <div>
                    <h5 className="text-2xl font-medium text-gray-900 dark:text-white">Bienvenido de vuelta!</h5>
                    <p>Te estabamos esperando.</p>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Correo Eléctronico *</label>
                    <input
                        type="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="nombre@gmail.com"
                        {...register("email", {
                            required: { value: true, message: "Este campo es requerido." },
                            pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "Correo incorrecto." }
                        })}
                    />
                    {/* mapping errors */}
                    { errors.email && <span className="text-red-600 mt-2 block">{errors.email.message}</span> }
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña *</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        {...register("password", {
                            required: { value: true, message: "Este campo es requerido." },
                            minLength: { value: 4, message: "Este campo debe tener minimo 4 caracteres." }
                        })}
                    />
                    { errors.password && <span className="text-red-600 mt-2 block">{errors.password.message}</span> }
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
