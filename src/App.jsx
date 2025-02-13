import HomePage from './Routes/homePage/homePage.jsx';
import ListPage from "./Routes/listPage/listPage.jsx";
import Layout from "./Routes/layout/layout.jsx";
import SinglePage from "./Routes/singlePage/singlePage.jsx";
//import ProfilePage from "./Routes/profilePage/profilePage.jsx";
import Login from "./Routes/login/login.jsx";
//import Register from "./Routes/register/register.jsx";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

function App() {


  // Create the Router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
        // {
        //   path:"/profile",
        //   element:<ProfilePage/>
        // },
        {
          path:"/login",
          element:<Login/>
        },
        // {
        //   path:"/register",
        //   element:<Register/>
        // }
      ]
    }
  ]);  

  return (
    <RouterProvider router={router}/>
  );
}

export default App;