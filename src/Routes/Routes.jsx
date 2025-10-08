import { createBrowserRouter } from "react-router";
import  Home  from "../Pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppsDetails from "../Pages/AppsDetails";
import ErrorPage from "../Pages/ErrorPage";

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
            path: '/apps/:id',
            element: <AppsDetails/>,
            loader: async ({ params }) => {
            const res = await fetch("./apps.json");
            const data = await res.json();
            const app = data.find(a => a.id === parseInt(params.id));
            if (!app) throw new Response("Not Found", { status: 404 });
            return app; }
        },
        
       
    ]
   },
   
])

export default router