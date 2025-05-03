import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useNavigate, useParams } from "react-router-dom";
import { findUserby, updateUser } from "../../services/UserService";

function EditUser() {
  const { userId } = useParams();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  console.log(userId);

  async function fetchUser() {
    try {
      const user = await findUserby(userId);
      setUserData(user);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  }

  async function handleEditUser(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await updateUser(userId, userData);
      navigate("/users");
    } catch (error) {
      setError(error.response?.data?.error ?? "Erro ao editar usuário");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUser();
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
        <div>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              width: "100%",
              textAlign: "left",
            }}
          >
            Edição de Usuário
          </p>
          <form
            onSubmit={handleEditUser}
            style={{
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <label>Nome:</label>
            <input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#0055b1",
                borderRadius: "12px",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              {loading ? (
                <ReactLoading
                  type="spin"
                  style={{
                    width: "24px",
                    height: "24px",
                    margin: "0 auto",
                  }}
                  color="#ffffff"
                  delay={0}
                />
              ) : (
                "Salvar"
              )}
            </button>
          </form>
        </div>
      </div>
      {error.length > 0 && (
        <div
          style={{
            color: "red",
            position: "absolute",
            bottom: "24px",
            right: "24px",
            backgroundColor: "rgba(255, 0, 0, 0.1)",
            padding: "12px",
            borderRadius: "12px",
          }}
        >
          {error ?? ""}
        </div>
      )}
    </div>
  );
}

export default EditUser;
