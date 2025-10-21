import { createBrowserRouter } from "react-router";
import Root from "../Mainlayout/Root";
import Errorpage from "../Pages/Errorpage";
import Home from "../Pages/Home";
import Apps from "../Pages/Appscard";
import Installed from "../Pages/Installed";
import Allapps from "../Pages/Allapps";
import Appdetails from "../Pages/Appdetails";
import Apppageerror from "../Pages/Apppageerror";



const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        index:true,
        path:'/',
        Component:Home,
      },
      {
        path:'/apps',
        Component:Allapps,
      },
      {
        path:'/appdetails/:id',
          Component:Appdetails,
          errorElement:<Apppageerror></Apppageerror>,
      },
      {
        path:'/installed apps',
        Component:Installed,
      },
      {
        path:'/appnotfound',
        Component:Apppageerror,
      }
      
    ]
  },
]);
export default router;