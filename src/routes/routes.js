import Contact from "../Componets/Contact/Contact";
import About from "../Componets/About/About";
import Career from "../Componets/Career/Career";

const NoMatch = () => {
  return <div>404</div>;
};

export const ROUTES = [
  {
    path: "/contact",
    exact: true,
    component: Contact,
  },
  {
    path: "/about",
    exact: true,
    component: About,
  },
  {
    path: "/",
    exact: true,
    component: Products,
  },
  {
    path: "/career",
    exact: true,
    component: Career,
  },
  {
    path: "*",
    exact: true,
    component: NoMatch,
  },
];
