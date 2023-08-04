import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import AllBooks from "../pages/allBooks";
import Layouts from "../components/Layouts";
import NotFound from "../pages/notFound";
import AddNewBook from "../pages/addNewBook";
import BookDetails from "../pages/bookDetails";

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
      {
        path: "/add-new-book",
        element: <AddNewBook />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
    ]
  },
  {
    path:'*',
    element:<NotFound />
  }
]);

export default routes;
