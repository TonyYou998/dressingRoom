import HomePage from "./../containers/HomeTemplate/HomePage";
import AboutPage from "./../containers/HomeTemplate/AboutPage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";
import DetailMoviePage from "../containers/HomeTemplate/DetailMovie";
import HocPage from "../containers/HomeTemplate/HocPage";
import DashboardPage from "../containers/AdminTemplate/DashboardPage";
import AddUserPage from "../containers/AdminTemplate/AddUserPage";
import HookPage from "../containers/HomeTemplate/hooks";
import MaterialPage from "../containers/HomeTemplate/MaterialPAge";
const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/home",
    component: HomePage,
  },
  {
    exact: false,
    path: "/about",
    component: AboutPage,
  },
  {
    exact: false,
    path: "/list-movie",
    component: ListMoviePage,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailMoviePage,
  },
  {
    exact: false,
    path: "/hoc",
    component: HocPage,
  },
  {
    exact: false,
    path: "/hooks",
    component: HookPage,
  },
  {
    exact: false,
    path: "/materialpage",
    component: MaterialPage,
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    exact: false,
    path: "/add-user",
    component: AddUserPage,
  },
];

export { routesHome, routesAdmin };
