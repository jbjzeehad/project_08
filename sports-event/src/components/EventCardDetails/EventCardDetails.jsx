import { BiDollar } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";


const EventCardDetails = () => {
    const evntCards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const cardEvent = evntCards.find(cardEvent => cardEvent.id === idInt);
    console.log(cardEvent);



    return (
        <div className="bg-gradient-to-br from-[#FBAE3F] to-[#001220] ">
            <div className="grid grid-cols-4 p-12 gap-5">
                <div className=" col-span-3 rounded-lg bg-[#001220] p-1">
                    <div className="relative">
                        <img className="w-full  rounded-lg" src={cardEvent.cover_image} />
                        <h3 className="absolute p-5 text-5xl bottom-0 font-bold text-[#FBAE3F] bg-[#001220] bg-opacity-50 w-full ">{cardEvent.title}</h3>
                    </div>
                    <p className="py-3 px-3 font-medium text-xl text-slate-200">{cardEvent.details}</p>
                </div>
                <div className=" px-3 text-xl font-semibold text-slate-200">
                    <p className="flex items-center gap-2 pb-3"><FaCalendarAlt></FaCalendarAlt>{cardEvent.time}</p>
                    <p className="flex items-center gap-2 pb-3"><MdPlace></MdPlace>{cardEvent.place}</p>
                    <p className="flex items-center gap-2 pb-3"><BiDollar></BiDollar>{cardEvent.price}</p>

                    <button className="text-white text-lg font-bold border-2 bg-[#001220] rounded-lg py-1 px-3 w-full" style={{ borderColor: cardEvent.bg_color }}>Register</button>
                </div>
            </div>
        </div>
    );
};

export default EventCardDetails;