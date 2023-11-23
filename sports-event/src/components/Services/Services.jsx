

const Services = () => {
    return (
        <div>
            <div className="px-10 py-5">
                <h3 className="text-3xl pb-5 font-bold text-[#FBAE3F]">Our Services</h3>
                <div className="flex">
                    <img src="sporttips.png" alt="" />
                    <div className=" w-2/5 p-8 text-xl text-white">
                        <form>

                            <div className="grid pb-4">
                                <span className="pb-3 font-semibold ">Email</span>
                                <input type="email" placeholder="email" name="email" className="p-3 rounded-lg border border-[#FBAE3C] bg-[#001220]" />
                            </div>
                            <div className="grid pb-4">
                                <span className="pb-3 font-semibold ">Message</span>
                                <input type="text" placeholder="text here" name="text" className="p-3 rounded-lg border border-[#FBAE3C] bg-[#001220]" />
                            </div>
                            <div className="mt-7 flex items-center gap-6">
                                <button className="w-full text-center text-[#001220] font-bold p-3 rounded-lg bg-[#FBAE3C]">SUBSCRIBE</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;