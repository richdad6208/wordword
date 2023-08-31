import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Solution from "./screen/Solution";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "solution",
        element: <Solution />,
      },
    ],
  },
]);

export default Router;
