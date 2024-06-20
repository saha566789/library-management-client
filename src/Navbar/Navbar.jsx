
import { NavLink } from 'react-router-dom';
import NavLogo from './NavLogo';
import { useContext,} from 'react';
import { AuthContext } from '../Hooks/AuthProvider';
import Theme from '../components/Theme/Theme';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)
  const handleLogOut = () => {
    logout().then()
  }

  const navLinks = <>
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
        to="/borrowed"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-yellow-600 underline dark:text-yellow-600" : ""
        }
      >
        Borrowed Books
      </NavLink>


    </li>
    <li className="ml-8 text-xs lg:text-lg flex items-center">
              {user?.email ? (
                <div className="flex items-center space-x-2">
                  <p className="lg:text-lg text-xs">{user.displayName}</p>
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
                    </div>
                  </label>
                  <button onClick={handleLogOut} className="text-yellow-600">Logout</button>
                </div>
              ) : (
                <NavLink to="/login" className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-yellow-600 underline" : ""
                }>
                  Login
                </NavLink>
              )}
            </li>

  </>
  return (
    <div className="navbar bg-gray-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-300 rounded-box w-52">
           {navLinks}
               
          </ul>
        </div>
        <NavLogo />
       
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
       <Theme></Theme>
      </div>
    </div>
  );
};

export default Navbar;



