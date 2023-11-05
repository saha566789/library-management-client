import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayouts from './layouts/MainLayouts';
import Header from './components/Home/Banner/Header/Header';
import ErrorPage from './Pages/ErrorPage';
import BookProduct from './components/Products/BookProduct';
import AllBooks from './components/Allbooks/AllBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Header></Header>,
        loader:()=>fetch('/book_category.json')
      },
      {
        path:"/libraries/:category_name",
        element:<BookProduct></BookProduct>,
        loader:({params}) =>fetch(`http://localhost:5000/libraries/${params.category_name}`)
      },
      {
        path:'/allBooks',
        element:<AllBooks></AllBooks>
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
