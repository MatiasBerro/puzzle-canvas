import styled from 'styled-components';

export const CanvasContainer = styled.div`
  background-color: #d3d3d3;
  border: 2px solid #d3d3d3;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const MainCanvas = styled.canvas``;

export const DrawingCanvas: any = styled.canvas<any>`
  position: absolute;
  z-index: 10;
`;
export const PiecesCanvas: any = styled.canvas`
  position: absolute;
`;
