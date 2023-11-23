import { useEffect, useState } from "react";
import ShopCard from "../ShopCard/ShopCard";

const Shops = () => {

    const [shopitemCard, setShopItemCard] = useState([]);

    useEffect(() => {
        fetch('productdata.json')
            .then(res => res.json())
            .then(data => setShopItemCard(data))
    }, [])

    return (
        <div className="grid grid-cols-4 p-16 gap-3 bg-gradient-to-bl from-[#001220] to-[#FBAE3F] ">
            {
                shopitemCard.map(shopcard => <ShopCard key={shopcard.id} shopcard={shopcard}>
                </ShopCard>)

            }


        </div>
    );
};

export default Shops;