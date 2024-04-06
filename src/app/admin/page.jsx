'use client'
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [bankName, setBankName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [amount, setAmount] = useState('');
  const [loanType, setLoanType] = useState('');
  const [allData, setAllData] = useState([]);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (username === 'admin' && password === 'password') {
        setAdminLoggedIn(true);
        setError('');
      } else {
        throw new Error('Invalid admin credentials');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAddData = async () => {
    try {
      const response = await axios.post('/api/data', {
        bankName,
        customerName,
        amount,
        loanType
      });
      console.log(response.data); // Log response from server
      setBankName('');
      setCustomerName('');
      setAmount('');
      setLoanType('');
      setError('');
    } catch (err) {
      console.error(err); // Log any error that occurs
      setError('Failed to add data');
    }
  };

  const handleGetData = async () => {
    try {
      const response = await axios.get('/api/data');
      setAllData(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch data');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        {!adminLoggedIn ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <button type="submit" className="block w-full bg-indigo-500 text-white rounded-md py-2 hover:bg-indigo-600 transition duration-300">Login</button>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        ) : (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center mb-4">Add Data</h2>
            <input
              type="text"
              placeholder="Bank Name"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Customer Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Type of Loan"
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <button onClick={handleAddData} className="block w-full bg-indigo-500 text-white rounded-md py-2 hover:bg-indigo-600 transition duration-300">Add Data</button>
            <div>
              <h2 className="text-2xl font-bold text-center mb-4">All Data</h2>
              <button onClick={handleGetData} className="block w-full bg-indigo-500 text-white rounded-md py-2 hover:bg-indigo-600 transition duration-300">Get All Data</button>
              <ul className="mt-4">
                {allData.map((userData, index) => (
                  <li key={index} className="border-b py-2">{JSON.stringify(userData)}</li>
                ))}
              </ul>
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
