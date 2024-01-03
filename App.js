import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./src/pages/Home"
import AboutMe from "./src/pages/AboutMe"
import Contact from "./src/pages/Contact"
import Project from "./src/pages/Project"
import Header from "./src/components/WebPage"
import WebPage from "./src/components/WebPage"
import ErrorPage from "./src/pages/ErrorPage"
import useDetectDevice from "./src/customHooks/useDetectDevice"

const router = createBrowserRouter([
    {
        path: "/",
        element: <WebPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                // index: true,
                element: <AboutMe />,
            },
            {
                path: 'contact',
                // index: true,
                element: <Contact />,
            },
            {
                path: 'projects/:projectId',
                // index: true,
                element: <Project />,
            },
        ]
    },
]);

export default function App(){
    useDetectDevice()
    return(
        <RouterProvider router={router} />
    )
}