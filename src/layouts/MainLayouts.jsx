import { Outlet } from "react-router-dom";


import Footer from '../Pages/Footer'
import Navbar from "../Navbar/Navbar";
const MainLayouts = () => {
    return (
        <div className="dark:bg-black dark:text-white">
            <Navbar></Navbar>
          
            <Outlet></Outlet>
           
           <Footer></Footer>
        </div>
    );
};

export default MainLayouts;