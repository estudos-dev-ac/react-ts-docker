import { AppLayout } from "@/pages/_layouts/app";
import { AuthLayout } from "@/pages/_layouts/auth";
import { Dashboard } from "@/pages/dashboard/dashboard";
import { Login } from "@/pages/login";
import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter ([
    {
       path: '/',
       element: <AppLayout />,
       children: [
            {
                path: "/",
                element: <Dashboard />
            }, 
   
       ]
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
             {
                 path: "login",
                 element: <Login />
             }, 
    
        ]
     },
])


