import { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify"
import { Link, useNavigate } from 'react-router-dom';

import { registerService } from '../services/auth.services.js';

const FormRegister = () => {

    const navigate = useNavigate();

    // mostrado la opcion de seleccionar los dispositivos
    const [isDevice, setIsDevice] = useState(false);
    
    const handleDeviceChange = (e) => {
        setIsDevice(e.target.value);
    }

    // configuracion del formulario
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleRegister = handleSubmit(async(data) => {

        const { mobilePhone, phone, birthDate, socioeconomicStratum, deviceAcces, connectivityInternet } = data;

        // parseando de string a number
        data.mobilePhone = parseInt(mobilePhone);
        data.phone = parseInt(phone);
        data.socioeconomicStratum = parseInt(socioeconomicStratum);

        // parsear de string a date
        data.birthDate = new Date(birthDate);

        // parsear de numero a booleano
        const deviceAccesNumber = parseInt(deviceAcces);
        data.deviceAcces = Boolean(deviceAccesNumber);
        const connectivityInternetNumber = parseInt(connectivityInternet);
        data.connectivityInternet = Boolean(connectivityInternetNumber);

        try {
            const userRegistered = await registerService(data);
            console.log(userRegistered);
            navigate("/login");

        } catch (error) {
            console.log(error);
            toast.error("Error al registrarte, intentalo nuevamente!");
        }
        
        console.log(data);
    })


    return (
        <div className="w-full max-w-[1300px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <ToastContainer/>
            <div className='mb-8'>
                <h5 className="text-2xl font-medium text-gray-900 dark:text-white">Crea una cuenta!</h5>
                <p>Empieza a participar de los sondeos.</p>
            </div>
            <form
                onSubmit={handleRegister}
                className="grid grid-cols-3 grid-rows-5 gap-6"
            >
                {/* tipo de documento */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Tipo de documento *</label>
                    <select
                        {...register("documentType", {
                            required: { value: true, message: "Este campo es requerido." },
                        })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="">Seleccionar tipo de documento</option>
                        <option value="Cedula de ciudadania">Cedula de ciudadania</option>
                        <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                        <option value="Cedula de extranjeria">Cedula de extranjeria</option>
                    </select>
                    {/* mapping errors */}
                    { errors.documentType && <span className="text-red-600 mt-2 block">{errors.documentType.message}</span> }
                </div>
                {/* numero de documento */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Número de documento *</label>
                    <input
                        type="number"
                        placeholder="1234567891"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        {...register("documentNumber", {
                            required: { value: true, message: "Este campo es requerido." },
                            minLength: { value: 7, message: "Este campo debe tener minimo 7 caracteres." },
                            maxLength: { value: 10, message:  "Este campo debe tener maximo 10 caracteres" }
                        })}
                    />
                    {/* mapping errors */}
                    { errors.documentNumber && <span className="text-red-600 mt-2 block">{errors.documentNumber.message}</span> }
                </div>
                {/* nombres */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombres *</label>
                    <input
                        type="text"
                        placeholder="Juan Camilo"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        {...register("firstName", {
                            required: { value: true, message: "Este campo es requerido." },
                        })}
                    />
                    { errors.firstName && <span className="text-red-600 mt-2 block">{errors.firstName.message}</span> }
                </div>
                {/* apellidos */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellidos *</label>
                    <input
                        type="text"
                        placeholder="Pinto Lopéz"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        {...register("lastName", {
                            required: { value: true, message: "Este campo es requerido." },
                        })}
                    />
                    { errors.lastName && <span className="text-red-600 mt-2 block">{errors.lastName.message}</span> }
                </div>
                {/* genero */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Genero *</label>
                    <select
                        {...register("gender", {
                            required: { value: true, message: "Este campo es requerido." },
                        })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="">Seleccionar genero</option>
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                        <option value="Intersexual">Intersexual</option>
                        <option value="Indefinido">Indefinido</option>
                        <option value="Prefiere no decir">Prefiere no decir</option>
                    </select>
                    {/* mapping errors */}
                    { errors.gender && <span className="text-red-600 mt-2 block">{errors.gender.message}</span> }
                </div>
                {/* numero de celular */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Numero de celular</label>
                    <input
                        type="number"
                        placeholder="3125468796"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        {...register("mobilePhone", {
                            minLength: { value: 10, message: "Este campo debe tener minimo 10 caracteres." },
                            maxLength: { value: 10, message:  "Este campo debe tener maximo 10 caracteres." }
                        })}
                    />
                    {/* mapping errors */}
                    { errors.mobilePhone && <span className="text-red-600 mt-2 block">{errors.mobilePhone.message}</span> }
                </div>
                {/* numero de telefono */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Numero de telefono</label>
                    <input
                        type="number"
                        placeholder="601234567"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        {...register("phone", {
                            minLength: { value: 10, message: "Este campo debe tener minimo 10 caracteres." },
                            maxLength: { value: 10, message:  "Este campo debe tener maximo 10 caracteres." }
                        })}
                    />
                    {/* mapping errors */}
                    { errors.phone && <span className="text-red-600 mt-2 block">{errors.phone.message}</span> }
                </div>
                {/* email */}
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
                {/* municipio */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Municipio *</label>
                    <input
                        type="text"
                        placeholder="Popayán"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        {...register("municipality", {
                            required: { value: true, message: "Este campo es requerido." },
                        })}
                    />
                    { errors.municipality && <span className="text-red-600 mt-2 block">{errors.municipality.message}</span> }
                </div>
                {/* direccion */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Direccion</label>
                    <input
                        type="text"
                        placeholder="Calle 5N #65-12"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        {...register("address")}
                    />
                    { errors.address && <span className="text-red-600 mt-2 block">{errors.address.message}</span> }
                </div>
                {/* barrio */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Barrio *</label>
                    <input
                        type="text"
                        placeholder="Camilo Torres"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        {...register("neighborhood", {
                            required: { value: true, message: "Este campo es requerido." },
                        })}
                    />
                    { errors.neighborhood && <span className="text-red-600 mt-2 block">{errors.neighborhood.message}</span> }
                </div>
                {/* fecha de nacimiento */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de nacimiento *</label>
                    <input
                        type="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date"
                        {...register("birthDate", {
                            required: { value: true, message: "Este campo es requerido." },
                            validate: (value) => {
                                
                                const fechaNacimiento = new Date(value);
                                const dateNow = new Date();
                                const edad = dateNow.getFullYear() - fechaNacimiento.getFullYear()

                                if (edad < 8) {
                                    return "Debes tener mas de 8 años.";
                                } else {
                                    return true;
                                }

                            }
                        })}
                    />
                    { errors.birthDate && <span className="text-red-600 mt-2 block">{errors.birthDate.message}</span> }
                </div>
                {/* Etnia */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Etnia *</label>
                    <input
                        type="text"
                        placeholder="Mestizo, Afrocolombiano, Wayuu"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        {...register("ethnicity", {
                            required: { value: true, message: "Este campo es requerido." },
                        })}
                    />
                    { errors.ethnicity && <span className="text-red-600 mt-2 block">{errors.ethnicity.message}</span> }
                </div>
                {/* discapacidad */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discapacidad *</label>
                    <input
                        type="text"
                        placeholder="Discapacidad Fisica, Discapacidad Sensorial"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        {...register("disability", {
                            required: { value: true, message: "Este campo es requerido." },
                        })}
                    />
                    { errors.disability && <span className="text-red-600 mt-2 block">{errors.disability.message}</span> }
                </div>
                {/* estrato socio economico */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Estrato socioeconomico *</label>
                    <input
                        type="number"
                        placeholder="3"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        {...register("socioeconomicStratum", {
                            required: { value: true, message: "Este campo es requerido." },
                            maxLength: { value: 1, message:  "Este campo debe tener maximo 1 caracteres" }
                        })}
                    />
                    {/* mapping errors */}
                    { errors.socioeconomicStratum && <span className="text-red-600 mt-2 block">{errors.socioeconomicStratum.message}</span> }
                </div>
                {/* Nivel educativo */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nivel educativo *</label>
                    <input
                        type="text"
                        placeholder="Primaria"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        {...register("educationLevel", {
                            required: { value: true, message: "Este campo es requerido." },
                        })}
                    />
                    { errors.educationLevel && <span className="text-red-600 mt-2 block">{errors.educationLevel.message}</span> }
                </div>
                {/* acceso a dispositivos */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Acceso a dispositivos *</label>
                    <select
                        onClick={(e) => {
                            handleDeviceChange(e);
                        }}
                        {...register("deviceAcces", {
                            required: { value: true, message: "Este campo es requerido." },
                        })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="">Seleccionar</option>
                        <option value="1">Si</option>
                        <option value="0">No</option>
                    </select>
                    {/* mapping errors */}
                    { errors.deviceAcces && <span className="text-red-600 mt-2 block">{errors.deviceAcces.message}</span> }
                </div>
                {/* dispositivos */}
                {
                    isDevice === '1' && (
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Dispositivos</label>
                            <select
                                {...register("devices")}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                <option value="Telefono Movil">Telefono Movil</option>
                                <option value="Computador">Computador</option>
                                <option value="Tablet">Tablet</option>
                            </select>
                        </div>
                    )
                }
                {/* conectividad a internet */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Conectividad a internet *</label>
                    <select
                        {...register("connectivityInternet", {
                            required: { value: true, message: "Este campo es requerido." },
                        })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="">Seleccionar</option>
                        <option value="1">Si</option>
                        <option value="0">No</option>
                    </select>
                    {/* mapping errors */}
                    { errors.connectivityInternet && <span className="text-red-600 mt-2 block">{errors.connectivityInternet.message}</span> }
                </div>
                {/* regimen de salud */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Tipo de regimen de salud *</label>
                    <select
                        {...register("healthRegime", {
                            required: { value: true, message: "Este campo es requerido." },
                        })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="">Seleccionar</option>
                        <option value="Subsidiado">Subsidiado</option>
                        <option value="Contributivo">Contributivo</option>
                    </select>
                    {/* mapping errors */}
                    { errors.healthRegime && <span className="text-red-600 mt-2 block">{errors.healthRegime.message}</span> }
                </div>
                {/* password */}
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
                {/* rol */}
                <div className='hidden'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Rol *</label>
                    <select
                        {...register("role", {
                            required: { value: true, message: "Este campo es requerido." },
                        })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="ciudadano">Ciudadano</option>
                        <option value="admin">Administrador</option>
                    </select>
                    {/* mapping errors */}
                    { errors.role && <span className="text-red-600 mt-2 block">{errors.role.message}</span> }
                </div>


                <div className="text-sm font-medium text-gray-500 dark:text-gray-300 flex flex-col gap-4">
                    <button type="submit" className="w-full block text-white transition-all bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Resgistrarme</button>
                    <p>¿Ya tienes una cuenta? <Link to="/login" className="text-gray-900 hover:underline">Ingresa a mi cuenta</Link></p>
                </div>
            </form>
        </div>
    );
}

export default FormRegister;