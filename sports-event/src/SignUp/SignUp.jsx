// import { BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";


const SignUp = () => {

    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
    }





    return (
        <div className="relative">
            <img className="w-full " src="siuBg.png" alt="" />
            <div className="absolute top-0 left-0 flex items-center">
                <div className="w-2/5">
                    <img className="animate-pulse" src="run.png" alt="" />
                </div>

                <div className=" w-2/5 p-8 text-xl text-white">
                    <form onSubmit={handleSignUp}>
                        <div className="grid pb-4">
                            <span className="pb-3 font-semibold ">Name</span>
                            <input type="text" name="name" placeholder="nickname" className="p-3 rounded-lg border border-[#FBAE3C] bg-[#001220]" required />
                        </div>
                        <div className="grid pb-4">
                            <span className="pb-3 font-semibold ">Email</span>
                            <input type="email" placeholder="email"
                                name="email" className="p-3 rounded-lg border border-[#FBAE3C] bg-[#001220]" required />
                        </div>
                        <div className="grid pb-4">
                            <span className="pb-3 font-semibold ">Password</span>
                            <input type="password" placeholder="password"
                                name="password" className="p-3 rounded-lg border border-[#FBAE3C] bg-[#001220]" required />
                        </div>
                        <div className="mt-7 flex items-center gap-6">
                            <button className="w-2/5 text-center text-[#001220] font-bold p-3 rounded-lg bg-[#FBAE3C]">SignUp</button>
                            <p>Have an <Link className="text-[#FBAE3C]" to='/signin'>Account</Link> ?</p>
                        </div>
                    </form>
                </div>



            </div>

        </div>
    );
};

export default SignUp;