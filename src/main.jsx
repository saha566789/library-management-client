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
import AddBook from './components/Addbook/AddBook';
import AuthProvider from './Hooks/AuthProvider';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PrivateRoutes from './Routes/PrivateRoutes';
import BookDetails from './components/Products/BookDetails';
import { Toaster } from 'react-hot-toast';
import BorrowedBooks from './Pages/BorrowBook/BorrowedBooks';
import UpdateBook from './components/Allbooks/UpdateBook'




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Header></Header>,
        // loader:()=>fetch('/book_category.json')
      },
      {
        path:"/libraries/:category_name",
        element:<BookProduct></BookProduct>,
        loader:({params}) =>fetch(`http://localhost:5000/libraries/${params.category_name}`)
      },
      {
         path:'/bookDetails/:id',
         element:<PrivateRoutes><BookDetails></BookDetails></PrivateRoutes>,
         loader:({params})=>fetch(`http://localhost:5000/bookDetails/${params.id}`)
      },
      {
        path:'/allBooks',
        element:<PrivateRoutes><AllBooks></AllBooks></PrivateRoutes>,
        loader:()=> fetch('http://localhost:5000/libraries')
      },
     {
      path:'/addBook',
      element:<PrivateRoutes><AddBook></AddBook></PrivateRoutes>
     },
     {
       path:'/borrowed',
       element:<PrivateRoutes><BorrowedBooks></BorrowedBooks></PrivateRoutes>,
      
     },
     {
        path:'/updateBook/:id',
        element:<UpdateBook></UpdateBook>,
        loader:({params})=>fetch(`http://localhost:5000/bookDetails/${params.id}`)
     },
     {
      path:'/login',
      element:<Login></Login>
     },
     {
      path:'/register',
      element:<Register></Register>
     }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 <Toaster/>
 </AuthProvider>
  </React.StrictMode>,
)
