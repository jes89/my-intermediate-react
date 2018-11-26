import { ImageMaker, Register, Login, Main, Monitoring, OrganizationChart } from './components/pages';

const routes = [
    {
        path : "/",
        id : "Main",
        exact : true,
        component : Main
    },
    {
        path : "/Login",
        id : "Login",
        exact : true,
        component : Login
    },
    {
        path : "/Register",
        id : "Register",
        exact : true,
        component : Register
    },
    {
        path : "/ImageMaker",
        id : "ImageMaker",
        exact : true,
        component : ImageMaker
    },
    {
        path : "/Monitoring",
        id : "Monitoring",
        exact : true,
        component : Monitoring
    },
    {
        path : "/OrganizationChart",
        id : "OrganizationChart",
        exact : true,
        component : OrganizationChart
    }
]

export default routes