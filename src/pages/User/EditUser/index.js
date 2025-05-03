import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findUserby, updateUser } from "../../../services/UserService";
import { Container } from "../../../general-components/Container";
import { Box } from "../../../general-components/Box";
import { Toast } from "../../../general-components/Toast";
import { Buttons } from "../../../general-components/Button";
import "./index.css";

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
    <Container>
      <Box>
        <div>
          <p>Edição de Usuário</p>
          <form onSubmit={handleEditUser}>
            <label>Nome:</label>
            <input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
            <Buttons
              text="Salvar"
              type="submit"
              disabled={loading}
              loading={loading}
            />
          </form>
        </div>
      </Box>

      {error.length > 0 && <Toast error={error} sucess={null} />}
    </Container>
  );
}

export default EditUser;
