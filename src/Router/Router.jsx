import { createBrowserRouter } from "react-router";
import Homelayout from "../Leyout/Homelayout";
import Home from "../Componet/Home";
import AddCoffee from "../Componet/AddCoffee";
import UpdateCoffee from "../Componet/UpdateCoffee";

export const router=createBrowserRouter([{
    path:'/',
    Component: Homelayout,
    children:([
        {
            index: true,
            // path: "/",
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
}])