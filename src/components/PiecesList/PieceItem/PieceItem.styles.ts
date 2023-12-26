import styled from 'styled-components';

export const ListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Piece = styled.img`
  object-fit: contain;
  filter: drop-shadow(0 0 0.3rem rgba(0, 0, 0, 0.2));
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    filter: brightness(1.05) drop-shadow(0 0 0.3rem rgba(0, 0, 0, 0.2));
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledMoveIcon = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25));
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export const StyledRemoveIcon = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  z-index: 10;
  top: -10px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 0 0.1rem rgba(0, 0, 0, 0.2));

  &:hover {
    cursor: pointer;
    scale: 1.1;
    transition: all 0.2s ease-in-out;
    filter: brightness(1.1) drop-shadow(0 0 0.1rem rgba(0, 0, 0, 0.2));
  }
  &:active {
    scale: 1;
    transition: all 0.2s ease-in-out;
  }
`;
