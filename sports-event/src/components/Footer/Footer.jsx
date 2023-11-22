import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
    return (
        <div className="bg-[#001220] grid grid-cols-5 py-5">
            <div className="items-center flex p-10">
                <img className="w-32" src="logo.png" />
            </div>
            <div>
                <h3 className="font-bold text-lg pb-3">Events</h3>
                <p>10K Runs<br />25k Runs<br />Marathons<br />MTB Championship<br />Kids Event</p>

            </div>
            <div>
                <h3 className="font-bold text-lg pb-3">Shops</h3>
                <p>Fork-Suspension<br />Cycle Seats<br />Cycle gear<br />Derailleur</p>

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