import { BiDollarCircle } from "react-icons/bi"
import { BiCategory } from "react-icons/bi";

const ShopCard = ({ shopcard }) => {
    const { id, image, title, category, price } = shopcard;
    return (
        <div className="bg-[#001220] drop-shadow-xl p-1  rounded-xl " >
            <div>
                <div>
                    <img className="rounded-lg" src={image} /></div>
                <p className="font-bold text-[#FBAE3F] text-xl p-2">{title}</p>
                <div className="flex text-lg gap-10 items-center pb-3 px-2">
                    <p className="flex items-center gap-2"><BiCategory></BiCategory>{category}</p>
                    <p className="flex items-center gap-2"><BiDollarCircle></BiDollarCircle>{price}</p>

                </div>
                <div className="flex gap-6 items-center">
                    <button className="text-white text-lg font-semibold border-2 bg-[#001220] rounded-lg py-1 px-3 w-full">Buy Now</button>


                </div>



            </div>


        </div>
    );
};

export default ShopCard;