import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const isEmailValid = /\S+@\S+\.\S+/.test(formData.email);
  const isPasswordValid = formData.password.length >= 4;

  const onLogin = (e) => {
    e.preventDefault();

    if (isEmailValid && isPasswordValid) {
      console.log("Login Data 👉", formData);
      alert("Login Successful ✅");
    }
  };

  return (
    <div className="login-container">
      <h2>🔐 Login</h2>

      <form onSubmit={onLogin}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && !isEmailValid && (
          <div className="error">Valid email required</div>
        )}

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && !isPasswordValid && (
          <div className="error">Minimum 4 characters required</div>
        )}

        <button
          className="btn btn-success"
          type="submit"
          disabled={!isEmailValid || !isPasswordValid}
        >
          Login
        </button>
      </form>
    </div>
  );
}
