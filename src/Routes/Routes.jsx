import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppsDetails from "../Pages/AppsDetails";
import ErrorPage from "../Pages/ErrorPage";
import LoadingSpinner from "../Component/LoadingSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/apps",
        element: <Apps />,
        loader: () => fetch("/apps.json").then((res) => res.json()), // public folder থেকে
        hydrateFallbackElement: <LoadingSpinner />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "/apps/:id",
        element: <AppsDetails />,
        loader: async ({ params }) => {
          const res = await fetch("/apps.json");
          const data = await res.json();
          const app = data.find((a) => a.id === parseInt(params.id));
          if (!app) throw new Response("Not Found", { status: 404 });
          return app;
        },
      },
    ],
  },
]);

export default router;
