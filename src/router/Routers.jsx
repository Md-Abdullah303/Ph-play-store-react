import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/homePage/HomePage";
import AppPages from "../pages/AppPages/AppPages";
import InstallPages from "../pages/InstallPages/InstallPages";
import NotFound from "../pages/NotFound/NotFound";
import AppDetails from "../pages/appDetails/AppDetails";
import Dashboard from "../pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/home",
        Component: HomePage,
      },
      {
        path: "/apps",
        Component: AppPages,
      },
      {
        path: '/apps/:id',
        Component: AppDetails,
      },
      {
        path: "/installed",
        Component: InstallPages,
      },
      {
        path: '/dashboard',
        Component: Dashboard,
      }
    ],
    errorElement: <NotFound></NotFound>,
  },
]);
