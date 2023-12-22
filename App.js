import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./src/pages/Home"
import AboutMe from "./src/pages/AboutMe"
import Contact from "./src/pages/Contact"
import Project from "./src/pages/Project"
import Header from "./src/components/Header"
import ErrorPage from "./src/pages/ErrorPage"

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
                // index: true,
                element: <AboutMe />,
            },
            {
                path: 'contact',
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
    return(
        <RouterProvider router={router} />
    )
}