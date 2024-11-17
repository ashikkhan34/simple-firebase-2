import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../Components/MainlayOut/MainlayOut";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import AllTreatments from "../Components/AllTreatments/AllTreatments";
import Profile from "../Components/Profile/Profile";
import MyAppointments from "../Components/MyAppointments/MyAppointments";
import Details from "../Components/MainlayOut/Details/Details";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "../Components/PriveteRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainlayOut></MainlayOut>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader:async()=>{
                    const serviceRes = await fetch('/service.json');
                    const serviceData = await serviceRes.json()

                    const feedbackRes = await fetch('/happyclients.json')
                    const feedbackData = await feedbackRes.json()

                    return {serviceData,feedbackData}
                }
            },
            {
                path:'/allTreatments',
                element:<AllTreatments></AllTreatments>,
                loader:()=>fetch('/service.json')

            },
            {
                path:'/myAppointments',
                element:<MyAppointments></MyAppointments>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path:'/details/:id',
                element:<PrivateRoute><Details></Details></PrivateRoute>,
                loader:async ({params})=>{
                    const res = await fetch('/service.json')
                    const data = await res.json()
                    const singleData = data.find(d=>d.id == params.id)
                    return singleData;
                }
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    }
])
export default router;
