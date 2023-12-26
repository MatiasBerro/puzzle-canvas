// AddImage.styles.js
import styled from 'styled-components';

export const AddImageButtonContainer = styled.div`
  margin: 2.5rem 0;
  display: flex;
  background-color: #60a5fa;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 9999px;
  width: 12rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    filter: brightness(110%);
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1);
  }
`;

export const AddButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  cursor: pointer;
`;

export const UploadText = styled.p`
  color: white;
  width: 100%;
  font-size: 1.125rem;
  margin: 0;
`;
