import styled from 'styled-components';
import { shade } from 'polished';

export const Overlay = styled.div`
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-items: center;
`;

export const Container = styled.div`
  width: 45rem;
  height: 45rem;
  border-radius: 0.8rem;
  background-color: #fff;
  box-shadow: rgba(0,0,0,0.4) 0rem 0.5rem 1.5rem;
  display: flex;
  position: relative;
  left: 35%;
  flex-direction: column;
  padding: 2.5rem;
`;

export const Close = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  border: 0;
  background-color: transparent;
`;

export const TitleContainer = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Form = styled.form`
  margin-top: 4rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  input {
    height: 5.6rem;
    padding: 0 2.4rem;
    border: 0.1rem solid #008DC8;
    border-radius: 0.8rem;
    color: #3a3a3a;

    & + input {
      margin-top: 1.6rem;
    }

    &::placeholder {
      color: #a8a8a8;
    }
  }

  button {
    margin-top: 1.6rem;
    width: 100%;
    height: 5.6rem;
    background: #008DC8;
    border: 0;
    border-radius: 0.8rem;
    color: #fff;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.25, '#008DC8')};
    }
  }
`;
