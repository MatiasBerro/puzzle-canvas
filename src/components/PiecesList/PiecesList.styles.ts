import styled from 'styled-components';

export const PiecesListContainer = styled.div`
  position: relative;
  border: 2px solid #d3d3d3;
  border-radius: 0.5rem;
  width: 30%;
  background-color: #fff;
`;

export const PiecesUl = styled.ul`
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1.75rem;
  justify-content: center;
  max-height: 100%;
  overflow-y: scroll;
`;

export const NoPiecesContainer = styled.div`
  text-align: center;
  margin: 2.5rem;
  flex-direction: column;
  justify-content: start;
  font-size: 1.25rem;
  color: #a0aec0;
  height: 100%;
  display: flex;
  align-items: center;
`;
