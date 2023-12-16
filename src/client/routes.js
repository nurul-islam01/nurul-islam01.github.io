import HomePage from "pages/home";
import NotFound from "pages/not-found";

const routes = [
  {
    path: "/",
    element: HomePage,
    exact: true,
  },
  {
    path: "*",
    element: NotFound,
  },
];

export default routes;
