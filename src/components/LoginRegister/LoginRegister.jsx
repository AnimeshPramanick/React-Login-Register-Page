import React, { useState } from "react";

function LoginRegister() {
  const [action, setAction] = useState("Register");

  return (
    <div className="container backdrop-blur-sm border border-neutral-800 bg-black/30 flex flex-col p-10 rounded-3xl w-[370px]">
      <div className="change mx-auto flex flex-row justify-center items-center">
        <button
          className={`submit flex justify-center items-center w-31 h-10 rounded-l-full text-xl p-2 font-semibold cursor-pointer ${
            action === "Register"
              ? "bg-blue-500/50 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => {
            setAction("Register");
          }}
        >
          Register
        </button>
        <button
          className={`submit flex justify-center items-center w-31 h-10 rounded-r-full text-xl p-2 font-semibold cursor-pointer
              ${
                action === "Login"
                  ? "bg-blue-500/50 text-white"
                  : "bg-white text-black"
              }`}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </button>
      </div>
      <div className="header flex flex-col justify-center items-center w-full mt-5 ">
        <div
          className={`text text-white font-bold text-4xl ${
            action === "Register" ? "mb-5" : "mb-0"
          }`}
        >
          {action}
        </div>
      </div>
      <div className="inputs mt-5 flex flex-col justify-center items-center">
        <form className="flex flex-col gap-5 w-[90%] ">
          {action === "Login" ? (
            <div></div>
          ) : (
            <input
              type="text"
              placeholder="Username"
              className="shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full border-none px-3 py-2 text-sm text-white font-light group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[1px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-black/60 dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-blue-500 bg-black/50 border-neutral-800 focus:border-blue-500 transition-all duration-200 rounded-full"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full border-none px-3 py-2 text-sm text-white font-light group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[1px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-black/60 dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-blue-500 bg-black/50 border-neutral-800 focus:border-blue-500 transition-all duration-200 rounded-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full border-none px-3 py-2 text-sm text-white font-light group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[1px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-black/60 dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-blue-500 bg-black/50 border-neutral-800 focus:border-blue-500 transition-all duration-200 rounded-full "
          />
        </form>
      </div>
      <div className="submit-btn flex justify-center items-center  mt-5 ">
        <button className=" bg-gradient-to-br from-blue-500/50 to-blue-500/50 px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-sky-600 w-[90%] cursor-pointer rounded-full">
          {action}
        </button>
      </div>
    </div>
  );
}

export default LoginRegister;
