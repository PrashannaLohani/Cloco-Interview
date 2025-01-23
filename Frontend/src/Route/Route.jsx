import { lazy, Suspense } from "react";
import { useRoutes, Outlet } from "react-router-dom";
import Loader from "../Components/loader/Loader";
import MainLayout from "../Layout/MainLayout";
import ProtectedRoute from "../Layout/ProtectedRoute";
import Error from "../Components/Error/Error";

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
          {/* <ProtectedRoute> */}
          <MainLayout>
            <Outlet />
          </MainLayout>
          {/* </ProtectedRoute> */}
        </Suspense>
      ),
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
    {
      path: "*",
      element: <Error />,
    },
  ]);
}
