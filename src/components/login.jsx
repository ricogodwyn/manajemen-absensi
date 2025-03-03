import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { loginHandler } from "../apiClient/apiHandler";

export default function Login() {
  const [Input, setInput] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({
      ...Input,
      [e.target.name]: e.target.value,
    });
  };
  const [error, setError] = useState(""); // For showing error messages
  // const [loading, setLoading] = useState(false); // For loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await loginHandler(Input);
      console.log(response.status);
      if (response.status) {
        alert("Login Successful!");
        navigate("/");
      }
    } catch (error) {
      setError(
        error.response?.data?.message || "Username or Password is incorrect"
      );
    }
  };
  return (
    <>
      <div className="bg-slate-300 h-lvh w-full flex items-center justify-center">
        <div className="bg-slate-600 text-white p-5 rounded-lg text-2xl">
          Login
          <div id="content" className="text-xl mt-3 flex flex-col">
            <form onSubmit={handleSubmit}>
              <div>Username</div>
              <input
                name="username"
                type="text"
                className="bg-slate-500 rounded-lg w-65 placeholder-slate-100 mt-1.5 "
                placeholder="Insert your username"
                value={Input.username}
                onChange={handleChange}
              ></input>
              <div className="mt-3">Password</div>
              <input
                name="password"
                type="password"
                className="bg-slate-500 rounded-lg w-65 placeholder-slate-100 mt-1.5"
                placeholder="Insert your password"
                value={Input.password}
                onChange={handleChange}
              ></input>
              {error && (
                <div className="text-red-500 mt-2 w-60 break-words">
                  {error}
                </div>
              )}{" "}
              <div className="flex mt-5 justify-center">
                <button
                  type="submit"
                  className="w-30 bg-blue-500 p-1.5 rounded-xl cursor-pointer hover:bg-blue-600"
                  // Disable the button while the request is loading
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
