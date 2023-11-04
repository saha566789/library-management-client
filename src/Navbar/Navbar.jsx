
import { NavLink } from 'react-router-dom';
import NavLogo from './NavLogo';

const Navbar = () => {
    return (
        <div className="bg-gray-300">
        <nav className="flex dropdown  lg:flex-row  justify-between items-center py-6  px-5">
  
        <NavLogo></NavLogo>
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
          <ul tabIndex={0} className="flex gap-5  dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40  lg:mt-0 mt-2">
            <li className="lg:text-lg text-xs">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-600 font-semibold  underline" : ""
                }
              >
                Home
              </NavLink>
  
            </li>
  
            <li className="text-xs lg:text-lg">
              <NavLink
                to="/addBook"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-600 underline" : ""
                }
              >
              Add Book
              </NavLink>
  
              
            </li>
            <li className="text-xs lg:text-lg">
              <NavLink
                to="/allBooks"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-600 underline" : ""
                }
              >
              All Books
              </NavLink>
  
              
            </li>
            
            <li className="text-xs lg:text-lg">
              <NavLink
                to="/borrowed"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-600 underline" : ""
                }
              >
             Borrowed Books
              </NavLink>
  
              
            </li>
            <li className="ml-8  text-xs lg:text-lg">
          <NavLink 
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-600 underline" : ""
                }
              >
             Login
              </NavLink>
      
        

  
              
            </li>
          </ul>

           {/* large menu list */}

          <ul  className="lg:flex gap-5 md:hidden hidden   lg:mt-0 mt-2">
            <li className="lg:text-lg text-xs">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-600 font-semibold  underline" : ""
                }
              >
                Home
              </NavLink>
  
            </li>
  
            <li className="text-xs lg:text-lg">
              <NavLink
                to="/addBook"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-600 underline" : ""
                }
              >
              Add Book
              </NavLink>
  
              
            </li>
            <li className="text-xs lg:text-lg">
              <NavLink
                to="/allBooks"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-600 underline" : ""
                }
              >
              All Books
              </NavLink>
  
              
            </li>
            
            <li className="text-xs lg:text-lg">
              <NavLink
                to="/borrowed"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-600 underline" : ""
                }
              >
             Borrowed Books
              </NavLink>
  
              
            </li>
            <li className="ml-8  text-xs lg:text-lg">
          <NavLink 
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-600 underline" : ""
                }
              >
             Login
              </NavLink>
      
        

  
              
            </li>
          </ul>
  
        </nav>
      </div>
    );
};

export default Navbar;