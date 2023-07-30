import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import AllBooks from "../pages/allBooks";
import Layouts from "../components/Layouts";
import NotFound from "../pages/notFound";

const routes = createBrowserRouter([
  {
    path:'/',
    element: <Layouts />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
    ]
  },
  {
    path:'*',
    element:<NotFound />
  }
]);

export default routes;
