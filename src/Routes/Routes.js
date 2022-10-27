import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category";
import Courses from "../pages/Courses/Courses";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Profile from "../pages/Profile/Profile";
import Faq from "../Pages/shared/Faq/Faq";
import Blog from "../Pages/shared/Blog/Blog";
import Course from "../pages/Course/Course";
import Checkout from "../pages/Checkout/Checkout";
import Privateroute from "./Privateroute/Privateroute";





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