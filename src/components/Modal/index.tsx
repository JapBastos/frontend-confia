/* eslint-disable react/prop-types */
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { FiXCircle } from 'react-icons/fi';
import {
  Container, Close, CloseButton, TitleContainer, Title, Overlay, Form,
} from './styles';

import api from '../../services/api';

type ModalProps = {
  setOpenModal: () => void;
}

function Modal({ setOpenModal }: ModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleAddUser() {
    const newUser = {
      name,
      email,
      password,
    };
    const response = await api.post('users', newUser);
    return response;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <Close>
          <CloseButton
            type="button"
            onClick={setOpenModal}
          >
            <FiXCircle size={20} />
          </CloseButton>
        </Close>
        <TitleContainer>
          <Title>Adicionar Usuário</Title>
        </TitleContainer>

        <Form onSubmit={handleAddUser}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
          <button type="submit">
            Adicionar novo Usuário
          </button>
        </Form>
      </Container>
    </Overlay>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('modal-root')!,
  );
}

export default Modal;
