import React, { useEffect, useState } from 'react';

import { useAuth } from "../context/auth.js";
const BatchUpdateForm = ({ userId }) => {
    const [newBatch, setNewBatch] = useState('');
    const [auth, setAuth] = useAuth();
    
    const handleBatchChange = (e) => {
    setNewBatch(e.target.value);
  };
  const getData=async(req,res)=>{
    try {
        console.log(auth?.user?._id);
        const data=await fetch(`http://localhost:3001/api/get-user/${auth?.user?._id}`)
        console.log(data)
    } catch (error) {
        console.error('Error updating batch information:', error);
    }
  }
  useEffect(()=>{
    getData();
  },[])

  const handleUpdateBatch = async () => {
    try {
      // Make a PUT request to the backend
      const response = await fetch(`http://localhost:3001/api/update-batch/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newBatch }),
      });

      const result = await response.json();

      // Handle the result as needed
      console.log('Updated Batch Information:', result);
    } catch (error) {
      console.error('Error updating batch information:', error);
    }
  };

  return (
    <div>
      <label htmlFor="newBatch">Update Batch:</label>
      <input
        type="text"
        id="newBatch"
        name="newBatch"
        value={newBatch}
        onChange={handleBatchChange}
      />
      <button onClick={handleUpdateBatch}>Update Batch</button>
    </div>
  );
};

export default BatchUpdateForm;
