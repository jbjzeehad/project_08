import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";


const Header = () => {

    const { user, signOutUser } = useContext(AuthContext);


    const handleSignOut = () => {
        // e.preventDefault();
        signOutUser()
            .then(() =>
                console.log('logged out user'))
            .catch(error =>
                console.error(error.message))
    }




    const navLinks = <>

        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/orderitems'>Orders</NavLink></li>
        <li><NavLink to='/events'>Events</NavLink></li>

        {/* <li><NavLink to='/signup'>SignUp</NavLink></li>
        <li><NavLink to='/signin'>SignIn</NavLink></li> */}

    </>
    return (
        <div>
            <div className="navbar bg-[#001220]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="w-1/4"><img src="logo.png" alt="" /></Link>

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <span>{user.email}</span>
                                <a onClick={handleSignOut} href="">SignOut</a>
                            </> : <>
                                <Link to='/signin'>
                                    <button className="btn btn-sm">SignIn</button></Link>
                                <Link to='/signup'>
                                    <button className="btn btn-sm">SignUp</button></Link>
                            </>


                    }

                </div>
            </div>
        </div>
    );
};

export default Header;