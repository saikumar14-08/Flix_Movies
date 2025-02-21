import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Login";
import Browse from "./Browse";

export const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,  // Layout wraps all pages
      children: [
        { path: "/", element: <Login /> },
        { path: "/browse", element: <Browse /> },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};
