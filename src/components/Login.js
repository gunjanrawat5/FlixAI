import React, { useRef, useState } from 'react';
import Header from './Header';
import LoginBg from '../utils/Login_Bg.jpg';
import { checkValidData } from '../utils/validate';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const [errorMessage,setErrorMessage] = useState(null)
    

    const email = useRef(null)
    const password = useRef(null)
    

    const handleButtonClick = () => {
        //Validate form data
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)
    }

   

    

    return (
    <div>
        <Header/>
        <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center"> {/* Ensure the container takes full screen and hides overflow */}
            
            <div className="absolute inset-0">
                <img className="w-screen h-screen object-cover" src={LoginBg} alt="Background" />
            </div>
            <form
             onSubmit={(e)=>e.preventDefault()}
             className="w-3/12 p-12 bg-slate-200 absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-40">
                <h1 className="font-bold text-black text-3xl py-4">{isSignInForm ? "Sign in" : "Sign Up"}</h1>

                {!isSignInForm && (
                    <input type="text" placeholder="First Name" className="p-4 my-4 w-full bg-slate-800" />
                )}

                {!isSignInForm && (
                    <input type="text" placeholder="Last Name" className="p-4 my-4 w-full bg-slate-800" />
                )}

                <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-slate-800" />

                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-slate-800" />

                <p className='text-red-500 font-bold text-lg py-2 '>{errorMessage}</p>
                
                <button className="p-4 my-6 bg-slate-600 w-full rounded-lg" onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <p className="py-4 cursor-pointer bg-black-" onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
                </p>
            </form>
        </div>
    </div>
    );
};

export default Login;
