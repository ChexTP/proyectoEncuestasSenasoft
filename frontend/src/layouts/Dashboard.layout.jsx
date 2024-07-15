import { Suspense, lazy } from "react";

const Loader = lazy(() => import("../components/Loader/Loader.jsx"));
const Sidebar = lazy(() => import("../components/Sidebar.jsx"));
const DashboardNavBar = lazy(() => import("../components/DashboardNavBar.jsx"));


const DashboardLayout = ({children}) => {
    return (
        <Suspense fallback={<Loader/>}>
            <div className="bg-gray-700 text-white h-screen">
                <DashboardNavBar/>
                <div className="flex h-[80vh]">
                    <Sidebar/>
                    <main className="p-10 w-full">
                        { children }
                    </main>
                </div>
            </div>
        </Suspense>
    );
}

export default DashboardLayout;
