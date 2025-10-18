import { createBrowserRouter } from "react-router";
import Root from "../Mainlayout/Root";
import Errorpage from "../Pages/Errorpage";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installed from "../Pages/Installed";



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
        Component:Apps,
      },
      {
        path:'/installed apps',
        Component:Installed,
      }
    ]
  },
]);
export default router;