import { useContext } from "react";
import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import { SurveysContext } from "../context/Surveys.context.jsx";

const SurveysForm = () => {

    const { setSurveysModalState } = useContext(SurveysContext);

    const { handleSubmit, register, formState:{ errors } } = useForm();

    const handleAddSurvey = handleSubmit(async(data) => {
        console.log(data);
    })

    return (

        <div className="w-screen h-screen bg-[#000000b3] backdrop-blur-sm absolute top-0 left-0 z-50 flex justify-center items-center">
            <div className="bg-gray-700 relative w-[500px] py-8 px-4 rounded-lg">
                <FontAwesomeIcon
                    onClick={() => setSurveysModalState(false)}
                    className="absolute top-3 cursor-pointer right-3 text-xl text-red-500"
                    icon={faCircleXmark}
                />
                <form>
                    <h1>survey form</h1>
                </form>
            </div>
        </div>

    );
}

export default SurveysForm;
