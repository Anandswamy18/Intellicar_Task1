import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Signup from "./components/Signup"
import Login from "./components/Login"
import UserDetails from "./components/UserDetails"


function RoutingModule() {

    const Routes = createBrowserRouter([

        {

            path: "",
            element: <Signup />

        },

        {

            path: "/login",
            element: <Login />

        },

        {

            path: "/userdetails",
            element: <UserDetails/>

        }

    ])


    return (
        <RouterProvider router={Routes} />
    )

}


export default RoutingModule