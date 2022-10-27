import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Category/Category";
import Courses from "../Pages/Courses/Courses";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Profile from "../Pages/Profile/Profile";
import Faq from "../Pages/shared/Faq/Faq";
import Blog from "../Pages/shared/Blog/Blog";
import Course from "../Pages/Course/Course";
import Checkout from "../Pages/Checkout/Checkout";
import Privateroute from "./PrivateRoute/PrivateRoute";





export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://plearning-server.vercel.app/course-categories`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://plearning-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://plearning-server.vercel.app/course/${params.id}`)

            },
            {
                path: '/course-checkout/:id',
                element: <Privateroute><Checkout></Checkout></Privateroute>,
                loader: ({ params }) => fetch(`https://plearning-server.vercel.app/course/${params.id}`)

            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch(`https://plearning-server.vercel.app/courses`)
            },

            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }

        ]
    }
])