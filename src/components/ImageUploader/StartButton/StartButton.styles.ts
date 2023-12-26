import styled from 'styled-components';

export const StartButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50%;
  transform: translateX(-50%);
  width: 10;
`;

export const StartButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  padding: 0.5rem;
  border-radius: 9999px;
  width: 8rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    background-color: black;
    filter: brightness(110%);
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const StartButtonText = styled.p`
  color: white;
  text-align: center;
  width: 100%;
  font-size: 1.125rem;
  text-decoration: none;
`;
