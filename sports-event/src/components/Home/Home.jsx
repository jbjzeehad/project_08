import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";


import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import EventSection from "../EventSection/EventSection";
import ShopSection from "../ShopSection/ShopSection";





const Home = () => {



    const authInfo = useContext(AuthContext);
    console.log(authInfo);



    return (
        <div className="bg-gradient-to-b from-[#FBAE3F] to-[#001220] ">
            <Banner></Banner>
            <EventSection></EventSection>
            <ShopSection></ShopSection>
            <Services></Services>
        </div >
    );
};

export default Home;