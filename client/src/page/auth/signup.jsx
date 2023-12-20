import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//NOTIFICATION SUCCESS
import toast from "react-hot-toast";
// import Header from "../../component/header";
import Header from '../../component/header.jsx'
import "./style.css";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  // const [errorMessage, setErrorMessage] = useState('');
  const [batch, setBatch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAgeChange = (e) => {
    const enteredAge = e.target.value;

    setAge(enteredAge);
    // Validate age
    if (enteredAge < 18 || enteredAge > 65) {
      setErrorMessage("Age must be between 18 and 65.");
    } else {
      setErrorMessage("");
    }
  };
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://yogaform-production-74ce.up.railway.app/api/signup", {
        email,password,batch, name,age
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    // <Layout title="Register - Ecommerce App">
    <>
      <Header />
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>

          <div className="mb-3">
            <input
              type="string"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Full Name "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="batch">Select Batch:</label>
            <select
              id="batch"
              name="batch"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
            >
              <option value="">Select a Batch</option>
              <option value="1">6-7AM</option>
              <option value="2">7-8AM</option>
              <option value="3">8-9AM</option>
              <option value="4">5-6PM</option>
            </select>
          </div>
          <div className="mb-3">
            <input
              type="number"
              id="age"
              name="age"
              className="form-control"
              value={age}
              placeholder="Enter You Age"
              onChange={handleAgeChange}
              required
            />
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>
          <button type="submit" className="btn btn-primary">
            SIGNUP
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
