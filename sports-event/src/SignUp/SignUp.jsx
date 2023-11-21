

const SignUp = () => {
    return (
        <div>
            <div className="relative">
                <img className="w-full" src="siuBg.png" alt="" />
                <div className="absolute top-28 left-32 flex gap-16">

                    <div className=" w-2/5 p-8 text-xl text-white">
                        <form>
                            <div className="grid pb-4">
                                <span className="pb-3 font-semibold ">Name</span>
                                <input type="text" placeholder="nick name" className="p-3 rounded-lg border border-[#FBAE3C] bg-[#001220]" required />
                            </div>
                            <div className="grid pb-4">
                                <span className="pb-3 font-semibold ">Email</span>
                                <input type="email" placeholder="email" className="p-3 rounded-lg border border-[#FBAE3C] bg-[#001220]" required />
                            </div>
                            <div className="grid">
                                <span className="pb-3 font-semibold">Password</span>
                                <input type="password" placeholder="password" className="p-3 rounded-lg border border-[#FBAE3C] bg-[#001220]" required />
                            </div>
                            <div className="mt-3 items-center">
                                <p className="font-semibold">Have an Account ?</p>
                                <button className="w-2/4 mt-3 text-center border  font-bold p-3 rounded-lg border-[#FBAE3C] bg-[#001220]">SignUp</button>

                            </div>
                        </form>
                    </div>
                    <div className=" w-2/5">
                        <img className="animate-pulse" src="run.png" alt="" />

                    </div>

                </div>

            </div>
        </div>
    );
};

export default SignUp;