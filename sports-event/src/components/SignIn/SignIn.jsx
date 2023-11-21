

const SignIn = () => {
    return (
        <div>
            <div className="relative">
                <img className="w-full " src="siuBg.png" alt="" />
                <div className="absolute top-28 left-5 flex">
                    <div className=" w-2/5">
                        <img className="animate-pulse" src="cycle.png" alt="" />
                    </div>
                    <div className=" w-2/5 p-8 text-xl text-white">
                        <form className="">
                            <div className="grid pb-4">
                                <span className="pb-3 font-semibold ">Email</span>
                                <input type="email" placeholder="email" className="p-3 rounded-lg border border-[#FBAE3C] bg-[#001220]" required />
                            </div>
                            <div className="grid">
                                <span className="pb-4 font-semibold">Password</span>
                                <input type="password" placeholder="password" className="p-3 rounded-lg border border-[#FBAE3C] bg-[#001220]" required />
                            </div>
                            <div className="mt-7 flex items-center gap-6">
                                <button className="w-2/5 text-center font-bold p-3 rounded-lg bg-[#FBAE3C]">LogIn</button>
                                <p>Not Register Yet</p>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default SignIn;