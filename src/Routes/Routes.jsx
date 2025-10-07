import { createBrowserRouter } from "react-router";
import  Home  from "../Pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
   {
    path: '/',
    element: <MainLayouts />,
    errorElement: <ErrorPage/>,
    children: [
        {
            index: true,
            element: <Home/>,
        },
        {
            path: '/apps',
            element: <Apps/>,
        },
        {
            path: '/installation',
            element: <Installation/>,
        },
    ]
   },
   
])

export default router