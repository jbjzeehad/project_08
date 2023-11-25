// import { BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const SignIn = () => {

    const [signError, setSignError] = useState('');
    const [success, setSucess] = useState('');

    const userSignIn = () => {

        toast('Welcome Back');

    }



    const { signInUser, signInWithGoogle } = useContext(AuthContext);



    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setSucess('');
        setSignError('');



        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                setSucess('Welcome!');
                userSignIn();

            })
            .catch(error => {
                console.error(error.message);
                setSignError("Doesn't Match");
            })
    }

    const handleGoogleSignIn = e => {
        e.preventDefault();
        setSucess('');
        setSignError('');
        signInWithGoogle()
            .then(result => {
                console.log(result.user);

                setSucess('Welcome!');
                userSignIn();

            })
            .catch(error => {
                console.error(error);
                setSignError("Not Registred");
            })
    }
    return (

        <div className="relative">
            <img className="w-full " src="siuBg.png" alt="" />
            <div className=" absolute top-0 left-0 flex items-center">

                <div className=" w-2/5">
                    <img className="animate-pulse" src="cycle.png" alt="" />
                </div>


                <div className=" w-2/5 p-8 text-xl text-white">
                    <form onSubmit={handleSignIn}>

                        <div className="grid pb-4">
                            <span className="pb-3 font-semibold ">Email</span>
                            <input type="email" placeholder="email" name="email" className="p-3 rounded-lg border border-[#FBAE3C] bg-[#001220]" required />
                        </div>
                        <div className="grid pb-4">
                            <span className="pb-3 font-semibold ">Password</span>
                            <input type="password" placeholder="password" name="password" className="p-3 rounded-lg border border-[#FBAE3C] bg-[#001220]" required />
                        </div>

                        {
                            signError && <p className="text-sm text-red-500">{signError}</p>
                        }
                        {
                            success && <p className="text-sm text-lime-500">{success}</p>
                        }




                        <div className="mt-7 flex items-center gap-6">
                            <button className="w-full text-center text-[#001220] font-bold p-3 rounded-lg bg-[#FBAE3C]">SignIn</button>

                        </div>
                    </form>
                    <div className='justify-around flex items-center mt-5'>
                        <button className='border rounded-lg py-1 w-2/5 flex items-center justify-center gap-2' onClick={handleGoogleSignIn}><FcGoogle></FcGoogle>SignIn</button>
                        <p>Not <Link className="text-[#FBAE3C]" to='/signup'>Register</Link> Yet !</p>

                    </div>

                </div>


            </div>
            <ToastContainer></ToastContainer>

        </div>


    );
};

export default SignIn;