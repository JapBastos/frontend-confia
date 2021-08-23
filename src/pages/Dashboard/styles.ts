import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 3.2rem;
  margin-top: 8rem;
`;

export const ActionButtons = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.form`
  margin-top: 4rem;
  width: 100%;

  display: flex;
  input {
    flex: 1;
    height: 5.6rem;
    padding: 0 2.4rem;
    border: 0;
    border-radius: 0.8rem 0rem 0rem 0.8rem;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8a8;
    }
  }

  button {
    width: 20rem;
    height: 5.6rem;
    background: #008DC8;
    border: 0;
    border-radius: 0rem 0.8rem 0.8rem 0rem;
    color: #fff;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.25, '#008DC8')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #d13020;
  margin-top: 0.8rem;
  padding-left: 1rem;
`;

export const Users = styled.div`
  margin-top: 6.4rem;

  a {
    background: #fff;
    border-radius: 0.8rem;
    width: 100%;
    padding: 2.4rem 3.2rem;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(2rem);
    }

    & + a {
      margin-top: 2rem;
    }

    div.avatar {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
      background-color: #e0e0e0;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin: 0 auto;
      }
    }

    div.user-info {
      margin-left: 3rem;

      strong {
        font-size: 2rem;
        color: #3d3d3d;
      }

      p {
        font-size: 1.8rem;
        color: #a8a8a8;
        margin-top: 0.4rem;
      }
    }

    svg {
      color: #008DC8;
      font-size: 4rem;
      margin-left: auto;
    }
  }
`;
