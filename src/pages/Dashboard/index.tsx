import { useState, FormEvent } from 'react';
import { FiUser, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import BaseModal from '../../components/Modal/base';

import Button from '../../components/Button';

import {
  Title, Form, Error, Users, ActionButtons,
} from './styles';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  created: string;
  updated: string;
}

function Dashboard(): JSX.Element {
  const [userName, setUserName] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [inputError, setInputError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  function handleToggleModal() {
    setModalOpen((isOpen) => !isOpen);
  }

  function handleListUsers() {
    setInputError('');
    api.get('users').then((response) => {
      setUsers(response.data);
    });
  }

  async function handleSearchUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setUsers([]);
    setInputError('');

    if (!userName) {
      setInputError('Digite um nome válido de usário.');
      return;
    }

    try {
      const response = await api.get(`users/name/${userName}`);

      if (response.data !== '') {
        setUsers(response.data);
        setUserName('');
      } else {
        setInputError('Nenhum usuário encontrado.');
      }
      return;
    } catch (err) {
      setInputError('Erro ao buscar usuário.');
    }
  }

  return (
    <>
      <Title>Painel de Usuários</Title>
      <ActionButtons>
        <Button onClick={handleToggleModal}>Adicionar Usário</Button>
        <BaseModal modalOpen={modalOpen} setModalOpen={handleToggleModal} />
        <Button onClick={handleListUsers}>Ver todos os Usuários</Button>
      </ActionButtons>

      <Form onSubmit={handleSearchUser}>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Digite o nome do Usuário"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      { inputError && <Error>{inputError}</Error> }

      <Users>
        {users.map((user) => (
          <a key={user.id} href="/">
            <div className="avatar">
              <FiUser />
            </div>
            <div className="user-info">
              <strong>{user.name}</strong>
              <p>{user.email}</p>
            </div>
            <FiChevronRight />
          </a>
        ))}
      </Users>
    </>
  );
}

export default Dashboard;
