
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import { updateProfile } from "firebase/auth";


const SignUp = () => {

    const [supError, setSupError] = useState('');
    const [success, setSucess] = useState('');

    const { createUser } = useContext(AuthContext);

    const userSignUp = () => {

        toast('Created Successfully');
    }


    const handleSignUp = e => {
        e.preventDefault();


        const name = e.target.name.value;
        const photourl = e.target.photourl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        if (password.length < 6) {
            setSupError("At least 6 character");
            return;
        } else if (!/[A-Z]/.test(password)) {
            setSupError("At least an UpperCase");
            return;
        }
        else if (!/[!@#$%^&*]/.test(password)) {
            setSupError("At least a Special Character");
            return;
        }
        setSucess('');
        setSupError('');






        createUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                setSucess('Supervb!');
                userSignUp();
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photourl,
                })
                    .then(() => console.log('done'))
                    .catch(() => console.kog('error'))

            })
            .catch(error => {
                console.error(error);
                setSupError("Already in Use");
            })
    }

    return (
        <div className="relative">
            <img className="w-full " src="siuBg.png" alt="" />
            <div className="absolute top-0 left-0 flex items-center">
                <div className="w-2/5">
                    <img className="animate-pulse" src="run.png" alt="" />
                </div>

                <div className=" w-2/5 p-8 text-lg text-white">
                    <form onSubmit={handleSignUp}>
                        <div className="grid pb-3">
                            <span className="pb-3 font-semibold ">Name</span>
                            <input type="text" name="name" placeholder="nickname" className="p-2 rounded-lg border border-[#FBAE3C] bg-[#001220]" required />
                        </div>
                        <div className="grid pb-3">
                            <span className="pb-3 font-semibold ">Photo URL</span>
                            <input type="text" name="photourl" placeholder="url" className="p-2 rounded-lg border border-[#FBAE3C] bg-[#001220]" required />
                        </div>
                        <div className="grid pb-3">
                            <span className="pb-3 font-semibold ">Email</span>
                            <input type="email" placeholder="email"
                                name="email" className="p-2 rounded-lg border border-[#FBAE3C] bg-[#001220]" required />
                        </div>
                        <div className="grid pb-3">
                            <span className="pb-3 font-semibold ">Password</span>
                            <input type="password" placeholder="password"
                                name="password" className="p-2 rounded-lg border border-[#FBAE3C] bg-[#001220]" required />
                        </div>
                        {
                            supError && <p className="text-sm text-red-500">{supError}</p>
                        }
                        {
                            success && <p className="text-sm text-lime-500">{success}</p>
                        }

                        <div className="mt-7 flex items-center gap-6">
                            <button className="w-2/5 text-center text-[#001220] font-bold p-3 rounded-lg bg-[#FBAE3C]">SignUp</button>
                            <p>Have an <Link className="text-[#FBAE3C]" to='/signin'>Account</Link> ?</p>
                        </div>
                    </form>
                </div>
            </div>

            <ToastContainer></ToastContainer>

        </div>
    );
};

export default SignUp;