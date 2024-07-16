import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer  } from "react-toastify";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FileInput } from "flowbite-react";

import { SurveysContext } from "../context/Surveys.context.jsx";
import { addSurvey } from "../services/surveys.services.js";

import Button from "./Button.jsx";
import Loader from "./Loader/Loader.jsx";

const SurveysForm = () => {

    const { setSurveysModalState, setSurveys, surveys, setSurveyLoading, surveyLoading } = useContext(SurveysContext);

    const { handleSubmit, register, formState:{ errors } } = useForm();

    // agregar encuesta
    const handleAddSurvey = handleSubmit(async(data) => {

        data.startDate = new Date(data.startDate);
        data.finishDate = new Date(data.finishDate);
        data.age = parseInt(data.age);
        data.image = data.image[0];

        try {
            const surveyCreated = await addSurvey(data);
            setSurveys([...surveys, surveyCreated.data.survey]);
            setSurveysModalState(false);
            setSurveyLoading(false);

        } catch (error) {
            toast.error("Error al subir la encuesta");
            console.log(error);
            setSurveyLoading(false);
        }
    })

    return (
        <div className="w-screen h-screen bg-[#000000b3] backdrop-blur-sm absolute top-0 left-0 z-50 flex justify-center items-center overflow-hidden">
            <ToastContainer/>
            { surveyLoading && <Loader/> }
            <div className="bg-gray-700 relative w-full max-w-[550px] h-[90vh] py-12 px-8 rounded-lg">
                <FontAwesomeIcon
                    onClick={() => setSurveysModalState(false)}
                    className="absolute top-5 right-5 cursor-pointer text-xl text-red-500"
                    icon={faCircleXmark}
                />
                <form className="space-y-4 h-full overflow-y-scroll custom-scroll pr-3" onSubmit={handleAddSurvey}>
                    <h3 className="text-xl font-semibold">Agrega una encuesta</h3>
                    {/* titulo */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white ">Titulo de la encuesta *</label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Ejemplo del nombre"
                            {...register("title", {
                                required: { value: true, message: "Este campo es requerido." },
                            })}
                        />
                        {/* mapping errors */}
                        { errors.title && <span className="text-red-600 mt-2 block">{errors.title.message}</span> }
                    </div>
                    {/* fechas de inicio y fin */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white ">Fecha de inicio y fin *</label>
                        <div className="flex justify-center items-center gap-4 w-full">
                            <div className="w-full">
                                <input
                                    type="date"
                                    className="text-black rounded-lg w-full"
                                    { ...register("startDate", {
                                        required: { value: true, message: "Este campo es obligatorio." }
                                    })}
                                />
                                { errors.startDate && <span className="text-red-600 mt-2 block">{errors.startDate.message}</span> }
                            </div>
                            <p>a</p>
                            <div className="w-full">
                            <input
                                    type="date"
                                    className="text-black rounded-lg w-full"
                                    { ...register("finishDate", {
                                        required: { value: true, message: "Este campo es obligatorio." }
                                    })}
                                />
                                { errors.startDate && <span className="text-red-600 mt-2 block">{errors.startDate.message}</span> }
                            </div>
                        </div>
                    </div>
                    {/*  descripcion */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white ">Descripcion *</label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-600 dark:border-blue-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Descripcion de la encuesta"
                            {...register("description", {
                                required: { value: true, message: "Este campo es requerido." },
                            })}
                        />
                        { errors.description && <span className="text-red-600 mt-2 block">{errors.description.message}</span> }
                    </div>
                    {/* Genero */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white ">Genero *</label>
                        <select
                            {...register("gender", {
                                required: { value: true, message: "Este campo es requerido." },
                            })}
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="">Seleccionar genero</option>
                            <option value="Hombre">Hombre</option>
                            <option value="Mujer">Mujer</option>
                        </select>
                        {/* mapping errors */}
                        { errors.gender && <span className="text-red-600 mt-2 block">{errors.gender.message}</span> }
                    </div>
                    {/* edad */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white ">Edad *</label>
                        <input
                            type="number"
                            placeholder="23"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            {...register("age", {
                                required: { value: true, message: "Este campo es requerido." },
                                minLength: { value: 1, message: "Este campo debe tener minimo 1 caracter." },
                                maxLength: { value: 120, message:  "Este campo debe tener maximo 3 caracter." }
                            })}
                        />
                        {/* mapping errors */}
                        { errors.age && <span className="text-red-600 mt-2 block">{errors.age.message}</span> }
                    </div>
                    {/* image */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white ">Imagen *</label>
                        <FileInput
                            { ...register("image", {
                                required: { value: true, message: "Este campo es requerido" }
                            }) }
                        />
                        { errors.image && <span className="text-red-600 mt-2 block">{errors.image.message}</span> }
                    </div>

                    <div className="mt-4">
                        <Button
                            background="bg-green-500"
                            text="Aceptar"
                            textColor="text-white"
                        />
                    </div>

                </form>
            </div>
        </div>

    );
}

export default SurveysForm;
