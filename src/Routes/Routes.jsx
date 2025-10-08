import { createBrowserRouter } from "react-router";
import  Home  from "../Pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import ErrorPage from "../Pages/ErrorPage";
import AppsDetails from "../Pages/AppsDetails";

const router = createBrowserRouter([
   {
    path: '/',
    element: <MainLayouts />,
    errorElement: <ErrorPage/>,
    hydrateFallbackElement: <p>loading......</p>,
    children: [
        {
            index: true,
            element: <Home/>,
            loader: () => fetch('./appsData.json'),
        },
        {
            path: '/apps',
            element: <Apps/>,
            loader: () => fetch('./apps.json'),
        },
        {
            path: '/installation',
            element: <Installation/>,
        },
        {
            path: '/appsDetails',
            element: <AppsDetails/>,
        },
    ]
   },
   
])

export default router