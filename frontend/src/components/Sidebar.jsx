import { Link, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSquarePollVertical, faChartPie, faCertificate, faPenToSquare, faRightFromBracket, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

import { logout } from '../services/auth.services.js';
import { AuthContext } from '../context/Auth.context';

const Sidebar = () => {

    const menuItems = [
        { title: "Inicio", icon: faHouse, route: "/" },
        { title: "Encuestas", icon: faSquarePollVertical, route: "/surveys" },
        { title: "Preguntas", icon: faCircleQuestion, route: "/questions" },
        { title: "Temas", icon: faPenToSquare, route: "/topics" },
        { title: "Estadisticas", icon: faChartPie, route: "/charts" },
        { title: "Certificados", icon: faCertificate, route: "/certificates" },
    ]

    // cerrar sesion
    const navigate = useNavigate();
    const handleLogout = async() => {
        try {
            await logout();
            navigate("/login")
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <aside id="logo-sidebar" className="relative z-40 w-64 h-[88.5vh] pt-5 transition-transform -translate-x-full bg-gray-800 border-r sm:translate-x-0  border-gray-700" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {
                        menuItems?.map((menuItem, index) => (
                            <li key={index}>
                                <Link to={menuItem.route} className="group flex items-center transition-all p-2 rounded-lg text-gray-500 hover:bg-gray-700">
                                    <FontAwesomeIcon className='text-gray-500 text-xl group-hover:text-white' icon={menuItem.icon}/>
                                    <span className="ms-3 text-xl group-hover:text-white">{menuItem.title}</span>
                                </Link>
                            </li>
                        ))
                    }
                    <li onClick={handleLogout}>
                        <div className="group cursor-pointer flex items-center transition-all p-2 rounded-lg text-gray-500 hover:bg-red-500">
                            <FontAwesomeIcon className='text-gray-500 text-xl group-hover:text-white' icon={faPenToSquare}/>
                            <span className="ms-3 text-xl group-hover:text-white">Cerrar Sesión</span>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
