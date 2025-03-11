import { useState } from "react";
import Header from "./Header"

const Login = () => {
    const [IsSignInForm,setIsSignInForm] = useState(true);

    const toggleSignInForm = () =>{
        setIsSignInForm(!IsSignInForm);
    };

    return (
      <div className="absolute">
        <Header/>
        <div>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_small.jpg"
           alto="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
       <h1 className="font-bold text-white text-3xl py-4">
          {IsSignInForm ? "Sign In" : "Sign Up"}
       </h1>

       {!IsSignInForm && (
         <input 
         type="text"
         placeholder="Full Name" 
         className="p-4 my-4 w-full bg-gray-700"
       />
       )}
        <input 
          type="text"
          placeholder="Email Address" 
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
           {IsSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
           {IsSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In now."}
        </p>
      </form>
    </div>
    );
};

export default Login;