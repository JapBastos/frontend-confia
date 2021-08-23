import styled from 'styled-components';
import { shade } from 'polished';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.button`
  width: 45%;
  height: 5.6rem;
  background: #008DC8;
  border-radius: 0.8rem;
  border: 0;
  color: #fff;
  font-weight: bold;

  &:hover {
    background: ${shade(0.25, '#008DC8')};
  }
`;
