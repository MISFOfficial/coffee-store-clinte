import { createBrowserRouter } from "react-router";
import Homelayout from "../Leyout/Homelayout";
import Home from "../Componet/Home";
import AddCoffee from "../Componet/AddCoffee";
import UpdateCoffee from "../Componet/UpdateCoffee";
import SignIn from "../Componet/Users/SignIn";
import Register from "../Componet/Users/Register";
import Error from "../Componet/Error";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Homelayout,
        children: ([
            {
                index: true,
                // path: "/",
                loader: () => fetch('http://localhost:3000/coffees'),
                Component: Home
            },
            {
                path: "addcoffee",
                Component: AddCoffee
            },
            {
                path: "updatecoffee",
                Component: UpdateCoffee
            }
        ])
    },
    {
        path: '/signin',
        Component: SignIn
    },
    {
        path: '/register',
        Component: Register
    }, 
    {
        path: '/*',
        Component: Error
    } 
])