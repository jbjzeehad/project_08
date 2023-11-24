import { useEffect, useState } from "react";
import ShopCard from "../ShopCard/ShopCard";

const Shops = () => {

    const [shopitemCard, setShopItemCard] = useState([]);
    const [shopitemCardLength, setShopitemCardLength] = useState(4);

    useEffect(() => {
        fetch('productdata.json')
            .then(res => res.json())
            .then(data => setShopItemCard(data))
    }, [])

    return (
        <div className="p-16 bg-gradient-to-bl from-[#001220] to-[#FBAE3F] ">
            <div className="grid grid-cols-4 gap-3 ">
                {
                    shopitemCard.slice(0, shopitemCardLength).map(shopcard => <ShopCard key={shopcard.id} shopcard={shopcard}>
                    </ShopCard>)
                }
            </div>
            <div className={`${shopitemCardLength === shopitemCard.length ? 'hidden' : ''} text-center pt-6`}>
                <button onClick={() => setShopitemCardLength(shopitemCard.length)} className="text-white text-lg font-bold border-2 bg-[#001220] rounded-lg py-2 px-4">Show More</button>
            </div>
        </div>
    );
};

export default Shops;