import styled from 'styled-components';

export const PickerContainer: any = styled.div`
  display: flex;
  align-items: start;
  max-height: 500px;
  height: 500px;
  overflow-y: scroll;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px dashed black;
  border-radius: 0.75rem;
  gap: 1rem;
  padding: 1.75rem;
  background-color: #fff;
`;

export const NoImagesContainer = styled.div`
  text-align: center;
  flex-direction: column;
  justify-content: center;
  font-size: 1.25rem;
  color: #a0aec0;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const Title = styled.div`
  color: #d3d3d3;
  font-size: 2rem;
`;
export const Subtitle = styled.div`
  margin-top: 10px;
  color: #d3d3d3;
  display: flex;
  align-items: center;
  font-size: 1rem;

  span {
    font-weight: bold;
    margin: 0 0.25rem;
  }
`;

export const ImageContainer: any = styled.div`
  position: relative;
`;

export const StyledImage: any = styled.img<any>`
  border-radius: 0.5rem;
  height: 10rem;
  cursor: pointer;
  object-fit: cover;
  aspect-ratio: 4 / 3;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  border: ${(props: any) => (props.selected ? '4px solid black' : 'none')};
`;
