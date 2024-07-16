import { useContext } from "react";
import { Link } from "react-router-dom";

import logoSena from "../assets/logoSena.png";

import { getInitialLeterName } from "../utils/getInitialLetterName.js";
import { initialLetterUppercase } from "../utils/initialUpperName.js";

import { AuthContext } from "../context/Auth.context.jsx";


const DashboardNavBar = () => {

    const { user } = useContext(AuthContext);
    const fullName = `${user.firstName} ${user.lastName}`;

    return (
        <nav className="h-[11.5vh] flex items-center justify-between z-50 w-full border-b border-gray-700 bg-gray-800 ">
            <div className="w-full px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                <div className="flex items-center justify-start rtl:justify-end">
                    <Link to="/" className="flex">
                        <img src={logoSena} className="h-10 me-3" alt="Logo Sena" />
                        <span className="self-center text-lg font-semibold sm:text-xl text-white whitespace-nowrap">SondeosSenasoft</span>
                    </Link>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center ms-3">
                        <div className="flex gap-4 justify-center items-center bg-gray-700 py-1 pl-1 pr-4 rounded-full">
                            <div className="w-12 h-12 bg-dark-gradient border-gray-800 rounded-full border  flex justify-center items-center">
                                <p className="text-2xl font-semibold text-white">{getInitialLeterName(fullName)}</p>
                            </div>
                            <p className="text-lg font-semibold text-white">{initialLetterUppercase(fullName)}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default DashboardNavBar;
