import { createBrowserRouter } from "react-router";
import HomeLayOut from "../Layouts/HomeLayOut";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([

    {
        path:'/',
        element:<HomeLayOut></HomeLayOut>,
        children:[
            {
                path:"",
                element:<HomePage></HomePage>,
            },
        ]
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