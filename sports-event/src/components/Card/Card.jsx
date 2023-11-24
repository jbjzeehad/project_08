import { GiTicket } from "react-icons/gi";
import { MdPlace } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Card = ({ card }) => {

    const { user } = useContext(AuthContext);




    const { id, image, bg_color, title, place, price, time } = card;
    return (
        <div className="bg-[#001220] drop-shadow-xl  p-2 rounded-xl " >
            <div>
                <div>
                    <img className="rounded-lg" src={image} /></div>
                <p className="font-bold text-[#FBAE3F] text-2xl py-3">{title}</p>
                <div className="flex text-lg gap-10 items-center pb-3">
                    <p className="flex items-center gap-2"><MdPlace></MdPlace>{place}</p>
                    <p className="flex items-center gap-2"><GiTicket></GiTicket>{price}</p>

                </div>
                <div className="flex gap-6 items-center">

                    {
                        user ?
                            <>
                                <Link to={`/event/${id}`}> <button className="text-white text-lg font-bold border-2 bg-[#001220] rounded-lg py-1 px-3" style={{ borderColor: bg_color }}>View Details</button></Link>
                            </>
                            :
                            <>
                                <Link to='/signin'> <button className="text-white text-lg font-bold border-2 bg-[#001220] rounded-lg py-1 px-3" style={{ borderColor: bg_color }}>View Details</button></Link>
                            </>
                    }




                    <p className="flex text-lg items-center gap-2"><FaCalendarAlt></FaCalendarAlt>{time}</p>

                </div>



            </div>


        </div>
    );
};

export default Card;