'use client'
import { useEffect, useState } from 'react';

const DashboardUser2 = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user-specific data for user1 - Replace with your own data fetching logic
    // Example: Fetch user data from an API
    fetch('/api/userData/user2')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div>
      <h1>User2 Dashboard</h1>
      {userData && (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Display additional user-specific data */}
        </div>
      )}
    </div>
  );
};

export default DashboardUser2;
