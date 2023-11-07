import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import Footer from '../Pages/Footer'
const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
           
           <Footer></Footer>
        </div>
    );
};

export default MainLayouts;