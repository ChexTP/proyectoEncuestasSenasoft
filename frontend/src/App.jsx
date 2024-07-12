import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";

const Loader = lazy(() => import("./components/Loader/Loader.jsx"));
const Routes = lazy(() => import("./routes/AllRoutes.routes.jsx"));

import AuthContextProvider from "./context/Auth.context.jsx";

const App = () => {

  return (
    <Suspense fallback={<Loader/>}>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </AuthContextProvider>
    </Suspense>
  )

}

export default App;