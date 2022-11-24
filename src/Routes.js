import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
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
    }
]



const Routes = () => useRoutes(routes)


export default Routes