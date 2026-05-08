import { createBrowserRouter } from "react-router";
import HomeLayOut from "../Layouts/HomeLayOut";
import HomePage from "../pages/HomePage";
import CategoriesNews from "../pages/CategoriesNews";

export const router = createBrowserRouter([

    {
        path:'/',
        element:<HomeLayOut></HomeLayOut>,
        children:[
            {
                path:"",
                element:<HomePage></HomePage>,
            },
            {
                path:"/category/:id",
                element:<CategoriesNews></CategoriesNews>,
                loader:()=>fetch('/news.json')
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