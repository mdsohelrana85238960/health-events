

import {createBrowserRouter,} from "react-router-dom";
import Root from "../root/Root";
import Home from "../page/Home";
import About from "../page/about";
import Contact from "../page/Contact";
import Login from "../page/Login";
import Register from "../page/Register";

import EventDetails from "../EventCard/EventDetails";
import PrivateRouter from "./PrivateRouter";



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
        element: <PrivateRouter> <EventDetails></EventDetails> </PrivateRouter>,
        loader: () => fetch('/events.json')
      },
      {
        path:'/about',
        element: <PrivateRouter><About></About></PrivateRouter>
      },
      {
        path:'/contact',
        element: <PrivateRouter><Contact></Contact></PrivateRouter>
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