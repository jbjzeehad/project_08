import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#001220] grid grid-cols-5 py-5">
            <div className="items-center flex p-10">
                <Link to='/'><img className="w-32" src="logo.png" /></Link>
            </div>
            <div>
                <h3 className="font-bold text-lg pb-3"><Link to='/events'>Events</Link></h3>
                <p><Link to='/events'>10K Runs<br />25k Runs<br />Marathons<br />MTB Championship<br />Kids Event</Link></p>
            </div>
            <div>
                <h3 className="font-bold text-lg pb-3"><Link to='/shops'>Shops</Link></h3>
                <p><Link to='/shops'>Fork-Suspension<br />Cycle Seats<br />Cycle gear<br />Derailleur</Link></p>

            </div>
            <div>
                <h3 className="font-bold text-lg pb-3">Subscribes</h3>
                <p>Gmail<br />Yahoo<br />Discord</p>
            </div>
            <div>
                <h3 className="font-bold text-lg pb-3">Social Platform</h3>
                <p className="text-2xl flex gap-3"><TiSocialFacebook></TiSocialFacebook><TiSocialInstagram></TiSocialInstagram><TiSocialYoutube></TiSocialYoutube><TiSocialTwitter></TiSocialTwitter></p>

            </div>

        </div>
    );
};

export default Footer;