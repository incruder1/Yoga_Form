import React, { useEffect, useState,useMemo } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth.js";
import Header from "../component/header.jsx";
 
const BatchUpdateForm = ( ) => {
 
  const [newBatch, setNewBatch] = useState("");
 
  const [auth, setAuth] = useAuth();
  const [userData, setUserData] = useState("");
  const [batch, setBatch] = useState("");
  const [changeBatch, isBatchChange] = useState(false);
  const navigate = useNavigate();
  const handleBatchChange = (e) => {

    setNewBatch(e.target.value);
  };
  const getData =  async (req, res) => {
    try {
      
      const data = await axios.get(
        `https://yoga-backend-iqvz.onrender.com/api/get-user/${auth?.user?.email}`
      );
      setUserData(data?.data?.data);
      
    } catch (error) {
      console.error("Error updating batch information:", error);
    }
  }
  useEffect(() => {
    getData();
  }, [auth?.user?.email]);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    isBatchChange(!changeBatch);
    
  };

  const handleUpdateBatch = async (e) => {
    e.preventDefault();
    try {
        
      const response = await axios.put(
        `https://yoga-backend-iqvz.onrender.com/api/update-batch/${auth?.user?.email}`,
        {
          batch: newBatch,
        }
      );
    //   console.log(response);
      // Handle the result as needed
      console.log("Updated Batch Information:");
      navigate("/");
      toast.success("Changed Batch Number Successfully");
    } catch (error) {
      toast.error("Error updating batch information");
    }
  };

  return (
    <>
      <Header />
      <div className="form-container Forum" style={{ minHeight: "90vh" }}>
        <form>
          <h4 className="title">Attendee's Details</h4>
          <div className="mb-3">
            <p>Full Name:- {userData?.name?.toUpperCase()}</p>
          </div>
          <div className="mb-3">
            <p> Email:- {userData?.email}</p>
          </div><div className="mb-3">
            <p> Age:- {userData?.age}</p>
          </div>
          <div className="mb-3">
            <p>Current Batch:- 
            {
                userData?.batch === 1 ? " (6-7AM)": userData?.batch === 2 ? " (7-8AM)": userData?.batch === 3 ? " (8-9AM)": userData?.batch ===4 ? " (5-6PM)": " (Not Assigned Yet)"
            }
            
            </p>
          </div>
          <div className="mb-3">
            <button onClick={handleClick}>Want To Update Batch</button>
          </div>
          <div className="mb-3">
            {changeBatch ? (
              <>
                <label htmlFor="batch">Select Batch:</label>
                <select
                  id="batch"
                  name="batch"
                  value={newBatch}
                  onChange={(e) => setNewBatch(e.target.value)}
                >
                  <option value="">Select a Batch</option>
                  <option value="1">6-7AM</option>
                  <option value="2">7-8AM</option>
                  <option value="3">8-9AM</option>
                  <option value="4">5-6PM</option>
                </select>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="mb-3">
            <button onClick={(e)=>{
                toast.success("payment Done")
                e.preventDefault();
            }}>Payment</button>
          </div>
          <div className="mb-3">
            <button onClick={handleUpdateBatch}>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BatchUpdateForm;
