import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import Todos from "./pages/Todos";


export const routes = [
    {
        path: '',
        element: <Home />,
    },
    {
        path: 'todos',
        element: <Todos />
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'registration',
        element: <Registration />
    },
    {
        path: 'profile',
        element: <Profile />
    }
]



const Routes = () => useRoutes(routes)


export default Routes