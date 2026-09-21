import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Blog from './pages/Blog';
import NotFound from "./pages/NotFound";
import BlogDetails from './pages/BlogDetails';

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path:'/blog', element: <Blog /> },
        {path:'/blog/:slug', element: <BlogDetails/>},
        { path:'*', element: <NotFound/> },
      ],
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}
