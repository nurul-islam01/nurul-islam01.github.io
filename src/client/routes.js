import HomePage from "@pages/home";
import Resume from "@pages/resume";
import Contact from "@pages/contact";
import NotFound from "@pages/not-found";

const routes = [
  {
    path: "/",
    element: HomePage,
    exact: true,
  },
  {
    path: "/resume",
    element: Resume,
  },
  {
    path: "/contact",
    element: Contact,
  },
  {
    path: "*",
    element: NotFound,
  },
];

export default routes;
