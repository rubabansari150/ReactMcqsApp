import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [userName, setUserName] = useState("");
  const [rollNumber, setRollNumber] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (userName && rollNumber) {
      onLogin({ userName, rollNumber });
    }
  };

  return (
    <>
    <div className="logindetails">
    <h2>Login Form</h2>
    <form onSubmit={submitHandler}>
        <div className="nameInput">
            <label>Name:</label>
            <input type="text" value={userName} onChange={(e) => {
                setUserName(e.target.value)}}/>
        </div>
        <div className="rollNoInput">
            <label>Roll Number:</label>
            <input type="text" value={rollNumber} onChange={(e) => {
                setRollNumber(e.target.value)
            }}/>
        </div>
        <button type="submit" className="loginbtn">Login</button>
    </form>
    </div>
    </>
  );
};

export default LoginForm;
