import axios from "axios";
import React, { useState,  } from "react";


const Login = (props) => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    role: "",
  })

  const [error, setError] = useState("");

  

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {username, password} = formValues;

    axios
      .post("https://potluck-planner-3-back-end.herokuapp.com/api/users/login", {username, password })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        
      })
      .catch((err) => {
        console.log("Incorrect Login Info")
        setError(err.response.data.error)
      })

      return (
        <section>
          <header>
            <h1>Welcome to BloomTech's Potluck Planner</h1>
            <h3>Please enter your account information</h3>
          </header>

          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <label>
                Username
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={formValues.username}
                  onChange={handleChange}
                />
              </label>

              <label>
                Password
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </label>

              <label>
                Please Choose Your Role
                <select value={formValues.role} onChange={this.handleChange}>
                  <option value="organizer">Organizer</option>
                  <option value="guest">Guest</option>
                  
                </select>
              </label>

            </form>

          </div>
        </section>
      )


  };

}

export default Login;