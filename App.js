import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./src/pages/Home"
import AboutMe from "./src/pages/AboutMe"
import Contact from "./src/pages/Contact"
import Project from "./src/pages/Project"
import Header from "./src/components/Header"
import ErrorPage from "./src/pages/ErrorPage"
import { loader as projectLoader } from "./src/pages/Project"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <AboutMe />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'projects/:projectId',
                element: <Project />,
            },
        ]
    },
]);

export default function App(){
    return(
        <RouterProvider router={router} />
    )
}