import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteUser, listUsers } from "../services/UserService";

function Users() {
  const [users, setUsers] = useState([]);
  const [userAuth, setUserAuth] = useState(null);
  const navigate = useNavigate();

  async function fetchUsers() {
    try {
      const usersData = await listUsers();
      setUsers(usersData);
      const token = localStorage.getItem("token");
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUserAuth(payload);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  }

  async function handleDelete(userId) {
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      try {
        await deleteUser(userId);
      } catch (error) {
        console.error("Failed to delete user:", error);
      } finally {
        fetchUsers();
      }
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#f5f6fa",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "8px",
          padding: "40px",
          maxWidth: "768px",
          width: "100%",
          boxShadow: "0px 0px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h1>Usuários</h1>
        <table
          style={{
            width: "100%",
            maxWidth: "1440px",
            borderCollapse: "collapse",
            marginTop: "20px",
            border: "1px solid #ddd",
            borderRadius: "12px",
          }}
        >
          <thead
            style={{
              backgroundColor: "lightgray",
              color: "black",
              padding: "10px",
              textAlign: "left",
              fontSize: "16px",
              borderRadius: "12px",
            }}
          >
            <tr>
              <th
                style={{
                  padding: "4px",
                }}
              >
                Nome
              </th>
              <th
                style={{
                  padding: "4px",
                }}
              >
                Email
              </th>
              <th
                style={{
                  padding: "4px",
                }}
              >
                Tipo
              </th>
              {userAuth?.type === "admin" && (
                <th
                  style={{
                    padding: "4px",
                  }}
                >
                  Ações
                </th>
              )}
            </tr>
          </thead>
          <tbody
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "12px",
              textAlign: "left",
              fontSize: "16px",
              borderRadius: "12px",
            }}
          >
            {users.map((user) => (
              <tr key={user.id} style={{ border: "1px solid #ddd" }}>
                <td
                  style={{
                    padding: "4px",
                    border: "1px solid #ddd",
                  }}
                >
                  {user.name}
                </td>
                <td
                  style={{
                    padding: "4px",
                    border: "1px solid #ddd",
                  }}
                >
                  {user.email}
                </td>
                <td
                  style={{
                    padding: "4px",
                    border: "1px solid #ddd",
                  }}
                >
                  {user.type}
                </td>
                {userAuth?.type === "admin" && (
                  <td
                    style={{
                      padding: "4px",
                      border: "1px solid #ddd",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      title="Editar"
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        padding: "0",
                        marginRight: "5px",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate(`/users/${user.id}`)}
                    >
                      ✏️
                    </button>
                    <button
                      title="Excluir"
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        padding: "0",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDelete(user.id)}
                    >
                      🗑️
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
