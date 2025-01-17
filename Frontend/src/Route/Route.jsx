import { lazy, Suspense } from "react";
import { useRoutes, Outlet } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Loader from "../Components/loader/Loader";

// Lazy loading other pages
const Login = lazy(() => import("../Pages/Login"));
const Todo = lazy(() => import("../Pages/Todo"));
const History = lazy(() => import("../Pages/History"));
const Notification = lazy(() => import("../Pages/Notification"));

export default function Route() {
  return useRoutes([
    {
      element: (
        <Suspense fallback={<Loader />}>
          <Navbar>
            <Outlet />
          </Navbar>
        </Suspense>
      ),
      path: "/",
      children: [
        { element: <History />, path: "/history" },
        { element: <Notification />, path: "/notification" },
        { element: <Todo />, path: "/todo" },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
}
