import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Link } from "react-router-dom";
import { GiTicket } from "react-icons/gi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";





const Home = () => {



    const authInfo = useContext(AuthContext);
    console.log(authInfo);



    return (
        <div className="bg-gradient-to-b from-[#FBAE3F] to-[#001220] ">

            <Banner></Banner>

            {/* Banner Section */}

            {/* //// Event Section //// */}
            <div className="px-10 py-5 ">
                <h3 className="text-3xl pb-5 font-bold text-[#FBAE3F]">Upcoming Events</h3>
                <div className="flex gap-5 items-center">
                    <div className=" rounded-2xl relative">
                        <img className="rounded-2xl" src='https://i.ibb.co/RBD15ZH/dhakacard.png' />
                        <div className="bg-[#001220] bg-opacity-70 flex gap-12 absolute bottom-0 p-8 w-full rounded-b-2xl">
                            <p className="text-3xl text-slate-100 font-semibold">Dhaka Max</p>
                            <Link to='/events'> <button className="border font-bold flex items-center gap-2 p-2 border-[#FBAE3F] rounded-lg bg-[#001220] text-[#FBAE3F]"><GiTicket></GiTicket>Buy Ticket</button></Link>
                        </div>
                    </div>
                    <div className=" rounded-2xl relative">
                        <img className="rounded-2xl" src='https://i.ibb.co/HDFgpc9/sylhetcaard.png' />
                        <div className="bg-[#001220] bg-opacity-70 flex gap-12 absolute bottom-0 p-8 w-full rounded-b-2xl">
                            <p className="text-3xl text-slate-100 font-semibold">Sylhet 25K</p>
                            <Link to='/events'> <button className="border font-bold flex items-center gap-2 p-2 border-[#FFFF3F] rounded-lg bg-[#001220] text-[#FBAE3F]"><GiTicket></GiTicket>Buy Ticket</button></Link>
                        </div>
                    </div>
                    <div className=" p-5 text-center">
                        <Link to='/events'>
                            <p className="animate-bounce text-6xl p-2"><FaArrowAltCircleRight></FaArrowAltCircleRight></p>
                        </Link>
                    </div>
                </div>
            </div >



            <div className="px-10 py-5 ">
                <h3 className="text-3xl pb-5 font-bold text-[#FBAE3F]">Shop Now</h3>
            </div>

            <Services></Services>







        </div >
    );
};

export default Home;