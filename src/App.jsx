import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layouts";
import Ingredients from "./pages/Ingredients";
import Login from "./pages/Login";
import Tools from "./pages/Tools";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";

function App() {
  const routers = createBrowserRouter([
    {
      index: true,
      element: <Login />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/ingredients",
          element: <Ingredients />,
        },
        {
          path: "/tools",
          element: <Tools />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default App;
