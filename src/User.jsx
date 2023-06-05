import React, { useEffect, useState, startTransition } from 'react';
 import { API } from './apiService';
import value from './addUser';
import UserData from './addUser';

 const User = ({ printValue }) => {
   const [users, setUsers] = useState([]);
   const [usersLoading, setUsersLoading] = useState(false);
   console.log(value);

   const fetchUsers = async () => {
     try {
       setUsersLoading(true);

       const response = await API.getUsers();
      console.log(response);

       startTransition(() => {
         setUsers(response.data);
       });

       setUsersLoading(false);
     } catch (error) {
       setUsersLoading(false);
     }
  };

   useEffect(() => {
     fetchUsers();
   }, []);

  return (
    <>
      {usersLoading ? (
        <center>Loading...</center>
      ) : (
        <>
          <ul>
            {users?.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
          
        </>
      )} 
    </>
  );
};


export default User;
