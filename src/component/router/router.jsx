

import {createBrowserRouter,} from "react-router-dom";
import Root from "../root/Root";
import Home from "../page/Home";
import About from "../page/about";
import Contact from "../page/Contact";
import Login from "../page/Login";
import Register from "../page/Register";
import EventCard from "../EventCard/EventCard";
import EventDetails from "../EventCard/EventDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('/events.json')
      },
      {
        path:'/event/:id',
        element:<EventDetails></EventDetails>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
    ]
  },
]);

export default router;