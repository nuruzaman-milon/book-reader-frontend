import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import AllBooks from "../pages/allBooks";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <AllBooks />,
  },
]);

export default routes;
