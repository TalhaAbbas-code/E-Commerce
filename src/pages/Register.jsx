import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const Register = () => {
  const navigate = useNavigate();
  //style
  const inputStyle =
    "border-[2px] border-silver rounded-lg outline-[#8a4af3] p-2 focus:border-[#8a4af3] ease-linear duration-200 min-w-0";

  const buttonStyle =
    "mt-5 flex justify-center bg-[#8a4af3] text-white font-medium rounded-md p-2 ease-linear duration-200";
  const activeButtonStyle =
    " hover:bg-white hover:text-[#8a4af3] hover:scale-[1.0.5] hover:border-[2px] hover:shadow-md hover:border-[#8a4af3] cursor-pointer";
  const disableButtonStyle = " opacity-50";
  //states
  const [state, setFields] = useState({
    email: "",
    pass: "",
    first: "",
    last: "",
    confirm: "",
    errors: {
      confirm: false,
    },
  });

  const checkPass = () => {
    if (state.pass === state.confirm) {
      setFields((prevState) => ({
        ...prevState,
        errors: { confirm: false },
      }));
    } else {
      setFields((prevState) => ({
        ...prevState,
        errors: { confirm: true },
      }));
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };
  useEffect(() => {
    checkPass();
  }, [state.pass, state.confirm]);
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-center w-[100%] h-[100vh] bg-[#b892f7]">
      <div className="flex flex-col absolute top-[20%] shadow-lg border-silver border-[2px] bg-white rounded-lg p-5 mobile:w-[90%]">
        <text className="text-2xl ">REGISTER</text>

        {/* First Name Last Name */}
        <div className="flex mt-7 w-auto">
          <input
            className={inputStyle + ` mr-3`}
            name="first"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            value={state.first}
            required
          />
          <input
            className={inputStyle}
            name="last"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            value={state.last}
          />
        </div>

        {/* Email */}
        <input
          className={inputStyle + ` mt-7 mobile:w-[100%]`}
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={state.email}
          required
        />

        {/* Password */}
        <div className="flex mt-7">
          <input
            className={inputStyle + ` mr-3`}
            name="pass"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={state.pass}
            required
          />
          <input
            className={inputStyle}
            name="confirm"
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={state.confirm}
            required
          />
        </div>
        <div className="flex justify-center">
          <span className="flex-1 mr-3"></span>
          <span className="flex-1 text-red-500">{state.errors.confirm}</span>
        </div>

        {/* Submit button */}
        <input
          type="button"
          className={
            state.errors.confirm
              ? buttonStyle + activeButtonStyle
              : buttonStyle + disableButtonStyle
          }
          value="Sign up"
          onClick={handleLoginClick}
        />
      </div>
    </div>
  );
};
export default Register;
