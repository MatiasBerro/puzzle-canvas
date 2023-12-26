import styled from 'styled-components';

export const DialogBox = styled.dialog`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  padding: 1rem;
  height: 100vh;
  width: 100vw;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.6);
  display: ${(props) => (props.open ? 'flex' : 'none')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in-out;

  animation: 0.3s ease-in-out 0s 1 slideInFromTop;
  @keyframes slideInFromTop {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
  }
`;

export const DialogContent = styled.div`
  text-align: center;
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  max-width: 20rem;
  margin: auto;
`;

export const DialogText = styled.p`
  color: #4a5568;
  font-size: 1.5rem;
`;

export const Button: any = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props: any) => props.color || 'gray'};
  color: white;
  border-radius: 0.25rem;
  &:hover {
    filter: brightness(110%);
    scale: 1.05;
    cursor: pointer;
  }
  &:active {
    scale: 1;
    transition: all 0.2s ease-in-out;
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
  margin-top: 1rem;
`;
