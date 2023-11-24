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

    return (
        <div>
            <div className="px-10 py-3 grid grid-cols-3 items-center bg-[#001220]">
                <div className="w-32">
                    <Link to='/'><img src="logo.png" /></Link>
                </div>
                <div className=" flex justify-center text-base gap-3">
                    {
                        user ? <>
                            <Link to='/'><button className=" px-4 py-1 border rounded-md font-semibold focus:ring focus:ring-[#FBAE3C] hover:text-[#FBAE3C]">Home</button></Link>
                            <Link to='/shops'><button className=" px-4 py-1 border rounded-md font-semibold focus:ring focus:ring-[#FBAE3C] hover:text-[#FBAE3C]">Shops</button>
                            </Link>
                            <Link to='/orderitems'><button className=" px-4 py-1 border rounded-md font-semibold focus:ring focus:ring-[#FBAE3C] hover:text-[#FBAE3C]"> Order</button>
                            </Link>
                            <Link to='/events'><button className=" px-4 py-1 border rounded-md font-semibold focus:ring focus:ring-[#FBAE3C] hover:text-[#FBAE3C]">Events</button>
                            </Link>
                        </>
                            :
                            <>
                                <Link to='/'><button className=" px-4 py-1 border rounded-md font-semibold focus:ring focus:ring-[#FBAE3C] hover:text-[#FBAE3C]">Home</button></Link>
                                <Link to='/events'><button className=" px-4 py-1 border rounded-md font-semibold focus:ring focus:ring-[#FBAE3C] hover:text-[#FBAE3C]">Events</button>
                                </Link>
                            </>
                    }
                </div>
                <div className="flex gap-3 justify-end text-base">
                    {
                        user ?
                            <>
                                <span>{user.email}</span>
                                <a className="px-4 py-1 border rounded-md font-semibold focus:ring focus:ring-[#FBAE3C] hover:text-[#FBAE3C]" onClick={handleSignOut} href="/">SignOut</a>
                            </> : <>
                                <Link to='/signin'>
                                    <button className=" px-4 py-1 border rounded-md font-semibold focus:ring focus:ring-[#FBAE3C] hover:text-[#FBAE3C]">SignIn</button></Link>
                                <Link to='/signup'>
                                    <button className="rounded-md px-4 py-1 border font-semibold focus:ring focus:ring-[#FBAE3C] hover:text-[#FBAE3C]">SignUp</button></Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;