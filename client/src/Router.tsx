import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Solution from "./screen/Solution";
import Saying from "./screen/Saying";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "solution",
        element: <Solution />,
      },
      {
        path: "word",
        element: <Saying />,
      },
    ],
  },
]);

export default Router;
