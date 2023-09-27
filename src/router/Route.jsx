import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Favorites from "../pages/Favorites/Favorites";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/Error/ErrorPage";
import Phone from "../pages/Phone/Phone";

const  MyCreatedRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/phones.json')
      },
      {
        path: '/favorites',
        element: <Favorites></Favorites>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/phones/:id',
        element: <Phone></Phone>,
        loader: () => fetch('/phones.json')
      }
    ]
  }
])

export default MyCreatedRoute;