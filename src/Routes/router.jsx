import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/Home";

 const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:async () =>  {
                    const serviceRef = await fetch("/service.json")
                    const serviceData = await serviceRef.json()
                    const happyRef = await fetch("/happy.json")
                    const happyData = await happyRef.json()
                    return {serviceData,happyData} 

                }
            }
        ]
    }
 ])
 export default router