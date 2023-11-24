import { Link } from "react-router-dom";
import { BiDollarCircle } from "react-icons/bi"
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const ShopSection = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className="px-10 py-5 ">
                <h3 className="text-3xl pb-5 font-bold text-[#FBAE3F]">Shop Now</h3>
                <div className="flex gap-5 items-center">
                    <div className=" rounded-2xl relative">
                        <img className="rounded-2xl" src='https://i.ibb.co/DwTgfcS/cyclinggloves.png' />
                        <div className="bg-[#001220] bg-opacity-70 flex gap-12 absolute bottom-0 px-6 py-4 w-full rounded-b-2xl items-center">
                            <p className="text-lg text-slate-100 font-semibold ">Cycling Gloves</p>

                            {
                                user ?
                                    <>
                                        <Link to='/shops'> <button className="border font-bold flex items-center gap-2 py-2 px-5 border-slate-100 rounded-lg bg-[#001220] text-[#FBAE3F]"><BiDollarCircle></BiDollarCircle>24.95</button></Link>
                                    </>
                                    :
                                    <>
                                        <Link to='/signin'> <button className="border font-bold flex items-center gap-2 py-2 px-5 border-slate-100 rounded-lg bg-[#001220] text-[#FBAE3F]"><BiDollarCircle></BiDollarCircle>24.95</button></Link>
                                    </>
                            }
                        </div>
                    </div>
                    <div className=" rounded-2xl relative">
                        <img className="rounded-2xl" src='https://i.ibb.co/QDXPHs2/shoes.png' />
                        <div className="bg-[#001220] bg-opacity-70 flex gap-12 absolute bottom-0 px-6 py-4 w-full rounded-b-2xl items-center">
                            <p className="text-lg text-slate-100 font-semibold ">Running Shoes</p>
                            {
                                user ?
                                    <>
                                        <Link to='/shops'> <button className="border font-bold flex items-center gap-2 py-2 px-5 border-slate-100 rounded-lg bg-[#001220] text-[#FBAE3F]"><BiDollarCircle></BiDollarCircle>89.99</button></Link>
                                    </>
                                    :
                                    <>
                                        <Link to='/signin'> <button className="border font-bold flex items-center gap-2 py-2 px-5 border-slate-100 rounded-lg bg-[#001220] text-[#FBAE3F]"><BiDollarCircle></BiDollarCircle>89.99</button></Link>
                                    </>
                            }
                        </div>
                    </div>

                    <div className=" rounded-2xl relative">
                        <img className="rounded-2xl" src='https://i.ibb.co/x8LrFBq/sleeve.png' />
                        <div className="bg-[#001220] bg-opacity-70 flex gap-12 absolute bottom-0 px-6 py-4 w-full rounded-b-2xl items-center">
                            <p className="text-lg text-slate-100 font-semibold ">Calf Sleeves</p>

                            {
                                user ?
                                    <>
                                        <Link to='/shops'> <button className="border font-bold flex items-center gap-2 py-2 px-5 border-slate-100 rounded-lg bg-[#001220] text-[#FBAE3F]"><BiDollarCircle></BiDollarCircle>34.99</button></Link>
                                    </>
                                    :
                                    <>
                                        <Link to='/signin'> <button className="border font-bold flex items-center gap-2 py-2 px-5 border-slate-100 rounded-lg bg-[#001220] text-[#FBAE3F]"><BiDollarCircle></BiDollarCircle>34.99</button></Link>
                                    </>
                            }
                        </div>
                    </div>

                </div>
            </div >
        </div>
    );
};

export default ShopSection;