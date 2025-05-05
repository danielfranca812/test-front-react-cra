import { useNavigate } from 'react-router-dom';

import { Button } from '../Button';
import { Flex } from '../Flex';

import './index.css';

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
        {data
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.type}</td>
              {role === 'admin' && (
                <td>
                  <Flex justify="center">
                    <Button
                      children="✏️"
                      title="Editar"
                      variant="icon"
                      onClick={() => navigate(`/users/${user.id}`)}
                    />
                    <Button
                      children="🗑️"
                      title="Excluir"
                      variant="icon"
                      onClick={() => handleDelete(user.id)}
                    />
                  </Flex>
                </td>
              )}
            </tr>
          ))}
      </tbody>
    </table>
  );
}
