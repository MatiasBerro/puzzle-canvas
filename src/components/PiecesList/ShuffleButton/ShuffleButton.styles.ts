import styled from 'styled-components';

export const ShuffleButtonWrapper = styled.div<any>`
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding: 0.5rem;
  cursor: pointer;
  height: 3.5rem;
  width: 3.5rem;
  background-color: #2667a8;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  filter: drop-shadow(0 0 0.3rem rgba(0, 0, 0, 0.2));

  opacity: ${(props: any) => (props.show ? 1 : 0)};

  &:hover {
    scale: 1.1;
    filter: brightness(1.05) drop-shadow(0 0 0.3rem rgba(0, 0, 0, 0.2));
  }

  &:active {
    filter: brightness(1.2);
    scale: 1;
  }
`;
