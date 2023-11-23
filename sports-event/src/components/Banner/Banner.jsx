import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="h-screen bg-[url(banner.png)] 
bg-no-repeat bg-cover">
                <div className="bg-[#001220] bg-opacity-60">
                    <h3 className="p-10 text-slate-200 text-7xl font-bold">Your Only Limits Are <br />Self Im<span className="text-[#FBAE3F]">pos</span>ed.</h3>

                    <p className="px-12 text-3xl font-semibold text-[#FBAE3F]">Our Exciting Sports Event around the world. <br />Join with Us.
                    </p>
                    <div className="flex p-12 gap-5">
                        <Link to='/signup'><button className="text-slate-200 text-lg font-bold border-2 bg-[#001220] rounded-lg py-2 px-4">Sign Up</button></Link>
                        <Link to='/signin'>
                            <button className="text-slate-200 text-lg font-bold border-2 bg-[#001220] rounded-lg py-2 px-4">Sign In</button>
                        </Link>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;