import { createBrowserRouter } from "react-router";
import HomeLayOut from "../Layouts/HomeLayOut";

export const router = createBrowserRouter([

    {
        path:'/',
        element:<HomeLayOut></HomeLayOut>
    } ,
    {
        path:'/auth',
        element:<h1>This is Home</h1>
    },
    {
        path:'/news',
        element:<h1>This is Home</h1>
    },
])