import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { listUsers } from "../services/UserService";
function Users() {
  const [users, setUsers] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    const usersData = listUsers();
    setUsers(...usersData);
  }, []);
  return (
    <div>
      <h1> Usuários</h1>
      <div>Lista de usuários</div>
      <ul>
        {users.map((user) => (
          <li>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
