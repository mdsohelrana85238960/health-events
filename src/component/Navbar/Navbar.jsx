import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>
        <li><NavLink className=' text-lg' to='/'> Home </NavLink></li>
        <li><NavLink  className=' text-lg' to='/about'> About </NavLink></li>
        <li><NavLink className=' text-lg' to='/contact'> Contact </NavLink></li>
        <li><NavLink className=' text-lg' to='/login'> Login </NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <img className="w-40" src="https://t4.ftcdn.net/jpg/01/02/18/17/360_F_102181750_RYJww2jEMGky8VfrWiC3RfmmW19CmKb4.jpg" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/login'><a className="btn">Logout</a></Link>
        </div>
      </div>
    );
};

export default Navbar;