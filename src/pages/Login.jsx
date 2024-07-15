import React from "react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  //style
  const inputStyle =
    "border-[2px] border-silver rounded-lg outline-[#8a4af3] p-2 focus:border-[#8a4af3] ease-linear duration-200 ";

  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleLoginClick = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center w-[100%] h-[100vh] bg-[#b892f7]">
      <div className="flex flex-col absolute top-[30%] bg-white shadow-lg border-silver border-[2px] rounded-lg p-5 w-[40%] mobile:w-[90%]">
        <text className="text-2xl ">Log in</text>

        {/* First Name Last Name */}
        <div className="flex mt-7">
          {/* Email */}
          <input
            className={inputStyle + ` mt-2 w-[100%]`}
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={fields.email}
            required
          />
        </div>
        {/* Password */}
        <div className="flex mt-7">
          <input
            className={inputStyle + ` w-[100%]`}
            name="pass"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={fields.pass}
            required
          />
        </div>
        {/* Submit button */}

        <input
          type="button"
          className="mt-5 flex justify-center bg-[#8a4af3] text-white font-medium rounded-md p-2 hover:bg-white hover:text-[#8a4af3] hover:scale-[1.0.5] hover:border-[2px] hover:shadow-md hover:border-[#8a4af3] ease-linear duration-200"
          value="Log in"
          onClick={handleLoginClick}
        />
      </div>
    </div>
  );
};
export default Login;
