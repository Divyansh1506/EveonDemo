'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data'); // Assuming your backend endpoint to fetch data is '/api/data'
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {data.map(item => (
          <li key={item._id}>
            <strong>Broker Name:</strong> {item.BrokerName}<br />
            <strong>Customer Name:</strong> {item.CustomerName}<br />
            <strong>Loan Type:</strong> {item.LoanType}<br />
            {/* Add more fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
