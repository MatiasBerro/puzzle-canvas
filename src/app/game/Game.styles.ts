import styled from 'styled-components';

export const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 1rem 0;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1);
  }
`;

export const BackButtonText = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 20px 0;
`;

export const ContentContainer = styled.div`
  max-height: 600px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.5rem;
`;
