import React, { useEffect, useState, startTransition } from 'react';
 import { API } from './apiService';
import value from './addUser';
import "./User.css";
 const User = ({values}) => {
   const [users, setUsers] = useState([]);
   const [usersLoading, setUsersLoading] = useState(false);
   //console.log(value);

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
    <div >
      {usersLoading ? (
        <center>Loading...</center>
      ) : (
        <>
          <ol>
            {users?.map((user) => (
              <li key={user.id}><div className='printItem'> {user.name} </div></li>
            ))}
        
        {values.map((value, index) => (
          <li key={index}> <div className='printItem'>{value} </div> </li>
        ))}

         </ol>
        </>
      )} 
      </div>
    </>
  );
};


export default User;
