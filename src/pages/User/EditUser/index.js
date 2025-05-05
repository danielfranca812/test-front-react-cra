import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "../../../components/Box";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Flex } from "../../../components/Flex";
import { Input } from "../../../components/Input";
import { Title } from "../../../components/Title";
import { Toast } from "../../../components/Toast";
import { findUserby, updateUser } from "../../../services/UserService";
import "./index.css";

function EditUser() {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const fetchUser = useCallback(async () => {
    try {
      const user = await findUserby(userId);
      setUserData(user);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  }, [userId]);

  async function handleEditUser(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await updateUser(userId, userData);
      setToast({ type: "success", message: "Usuário editado com sucesso!" });
      setTimeout(() => {
        setLoading(false);
        navigate("/users");
      }, 2500);
    } catch (error) {
      setLoading(false);
      setToast({ type: "error", message: error.response?.data?.error });
    }
  }

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <Container>
      <Box>
        <div>
          <Title level={2} children="Editar Usuário" />
          <form onSubmit={handleEditUser}>
            <Flex direction="column" gap="4px">
              <Input
                label="Name"
                name="name"
                type="text"
                value={userData?.name}
                placeholder="Digite o novo nome"
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                required
              />
              <Input
                label="Email"
                name="email"
                type="text"
                value={userData?.email}
                placeholder="Digite um novo email"
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                required
              />
              <Input
                label="Senha"
                name="password"
                type="text"
                value={userData?.password}
                placeholder="Digite uma nova senha"
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                required
              />
            </Flex>
            <Flex justify="center" gap="1rem" marginTop="1rem">
              <Button
                children="Voltar"
                variant="tertiary"
                loading={null}
                onClick={() => navigate(-1)}
              />
              <Button
                type="submit"
                children="Salvar"
                disabled={loading}
                loading={loading}
              />
            </Flex>
          </form>
        </div>
      </Box>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </Container>
  );
}

export default EditUser;
