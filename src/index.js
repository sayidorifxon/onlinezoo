import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import ContacUsPage from './pages/ContacUsPage';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import ZooPage from './pages/ZooPage';
import Donate from './pages/Donate';
import FeedbackPage from './pages/FeedbackPage';
import Eagles from './pages/Eagles';
import Gorillas from './pages/Gorillas';
import Aligators from './pages/Aligators';
const appRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/map",
      element:<MapPage/>
    },
    {
      path:"/contact",
      element:<ContacUsPage/>
    },
    {
      path:"/login",
      element:<LoginPage/>
    },
    {
      path:"/signup",
      element:<SignUp/>
    },
    {
      path:"/zoo",
      element:<ZooPage/>
    },
    {
      path:"/donate",
      element:<Donate/>
    },
    {
      path:"/feedback",
      element:<FeedbackPage/>
    },
    {
      path:"/eagle",
      element:<Eagles/>
    },
    {
      path:"/gorilla",
      element:<Gorillas/>
    },
    {
      path:"/aligator",
      element:<Aligators/>
    },
    {
      path:"/*",
      element:<ErrorPage/>
    },
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);


