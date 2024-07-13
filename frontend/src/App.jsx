import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";

const Loader = lazy(() => import("./components/Loader/Loader.jsx"));
const Routes = lazy(() => import("./routes/AllRoutes.routes.jsx"));

const App = () => {

  return (
    <Suspense fallback={<Loader/>}>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </Suspense>
  )

}

export default App;