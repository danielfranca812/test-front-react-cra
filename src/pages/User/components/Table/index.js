import { Buttons } from "../../../../general-components/Button";
import "./index.css";
import { useNavigate } from "react-router-dom";

export function Table({ head, data, role, handleDelete }) {
  const navigate = useNavigate();

  return (
    <table>
      <thead>
        <tr>
          {head.map(({ name, permition }, index) => (
            <> {permition && <th key={index}>{name}</th>}</>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.type}</td>
            {role === "admin" && (
              <td className="action">
                <Buttons
                  text="✏️"
                  title="Editar"
                  variant="btn-icon"
                  onClick={() => navigate(`/users/${user.id}`)}
                />
                <Buttons
                  text="🗑️"
                  title="Excluir"
                  variant="btn-icon"
                  onClick={() => handleDelete(user.id)}
                />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
