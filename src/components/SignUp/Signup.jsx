import React from "react";
import { FaEyeSlash, FaFacebook } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../../assets/abazar-1.png";
import { LiaEyeSolid } from "react-icons/lia";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#9AA4FE] relative overflow-hidden font-sans py-4">
      {/* Main Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-[400px] p-10 rounded-[40px] bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl mx-4">
        {/* Header */}
        <div className="text-center flex items-center mb-8">
          <img src={logo} alt="" className="w-30 flex items-center p-5" />
          <h1 className="text-white text-3xl font-semibold text-left">
            Sign Up
          </h1>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div className="flex flex-col gap-2">
            <input
              type="name"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg bg-white outline-none text-gray-700 placeholder:text-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg bg-white outline-none text-gray-700 placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg bg-white outline-none text-gray-700 placeholder:text-gray-400"
              />
              {/* Eye icon placeholder */}
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer">
                <LiaEyeSolid />
              </span>
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder=" Confirm Password"
                className="w-full px-4 py-3 rounded-lg bg-white outline-none text-gray-700 placeholder:text-gray-400"
              />
              {/* Eye icon placeholder */}
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer">
                <LiaEyeSolid />
              </span>
            </div>
          </div>

          <div className="text-right">
            <a href="#" className="text-white/80 text-xs hover:underline"></a>
          </div>

          <button className="w-full py-3 mt-4 bg-[#002B5B] text-white font-bold rounded-lg hover:bg-[#001f42] transition-colors duration-300 shadow-lg">
            Sign Up
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-white/80 text-xs">
            Already have an account?{" "}
            <Link to={"/login"} className="font-bold hover:underline">
              login
            </Link>
          </p>
        </div>
        {/* Divider */}
        <div className="my-8 flex items-center justify-center">
          <span className="text-white/70 text-xs">or continue with</span>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-between gap-4">
          <button className="flex-1 flex justify-center py-2 bg-white rounded-lg hover:bg-gray-100 transition-colors">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-6 h-6"
            />
          </button>

          <button className="flex-1 flex justify-center py-2 bg-white rounded-lg hover:bg-gray-100 transition-colors">
            <FaFacebook className="w-6 h-6 text-[#1877F2]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
