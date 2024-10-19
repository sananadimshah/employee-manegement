import { useState } from "react";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hi");
    setemail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="pb-11 text-[25px] text-emerald-700">Log In </h1>

          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            className="border-2 text-lg outline-none font-medium border-emerald-600 bg-transparent py-2 px-6 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border-2 text-lg outline-none font-medium border-emerald-600 bg-transparent py-2 px-6 rounded-full placeholder:text-gray-400 mt-3"
            type="password"
            placeholder="Password"
          />
          {/* 
          <input type="checkbox" />
          <label htmlFor="remember">Remember Me</label>

          <label htmlFor="">forget Pasword</label> */}
          <button className=" mt-7 border-none font-semibold  outline-none text-white py-2 px-8 w-full hover:bg-emerald-700 rounded-full  bg-emerald-600 text-lg placeholder:text-white">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
