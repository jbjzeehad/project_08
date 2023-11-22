import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";





const Home = () => {
    const authInfo = useContext(AuthContext);
    console.log(authInfo);
    return (
        <div className="bg-[#001220]">
            <h2>This is Home for : {authInfo.user}</h2>
        </div>
    );
};

export default Home;