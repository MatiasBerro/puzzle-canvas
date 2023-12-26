import useGameStore from '@/store';
import { calculatePieceDimensions } from '@/lib/utils';
import { useState } from 'react';

const useDrawing = (canvasRef: any, drawRef: any, piecesRef: any) => {
  const mainCtx = useGameStore.getState().mainCtx;
  const drawCtx = useGameStore.getState().drawCtx;
  const piecesCtx = useGameStore.getState().piecesCtx;
  const canvas = useGameStore.getState().canvas;

  const [points, setPoints] = useState<
    {
      x: number;
      y: number;
    }[]
  >([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const pieces = useGameStore((state) => state.pieces);
  const setPieces = useGameStore((state) => state.setPieces);

  const startDrawing = ({
    nativeEvent: { offsetX, offsetY }
  }: {
    nativeEvent: { offsetX: number; offsetY: number };
  }) => {
    setPoints([]);

    drawCtx?.beginPath();
    drawCtx?.moveTo(offsetX, offsetY);
    setPoints([{ x: offsetX, y: offsetY }]);
    setIsDrawing(true);
  };

  const draw = ({
    nativeEvent: { offsetX, offsetY }
  }: {
    nativeEvent: { offsetX: number; offsetY: number };
  }) => {
    if (!isDrawing || !mainCtx) return;

    drawCtx.setLineDash([10, 10]);
    drawCtx.strokeStyle = '#FFFFFF';
    drawCtx.lineDashOffset = 20;
    drawCtx.lineWidth = 4;
    drawCtx.shadowColor = '#00000066';
    drawCtx.shadowBlur = 1;
    drawCtx.shadowOffsetX = 1;
    drawCtx.lineJoin = 'round';
    drawCtx.lineCap = 'round';
    drawCtx?.lineTo(offsetX, offsetY);
    drawCtx?.stroke();
    setPoints((prev) => [...prev, { x: offsetX, y: offsetY }]);
  };

  const finishDrawing = async () => {
    if (!isDrawing) return;

    const reset = () => {
      setIsDrawing(false);
      setPoints([]);
      drawRef.current.getContext('2d').clearRect(0, 0, 800, 600);
    };

    const [pieceWidth, pieceHeight, xOffset, yOffset] =
      calculatePieceDimensions(points);
    if (pieceWidth < 50 || pieceHeight < 50) {
      alert('The piece is too small. Please draw a bigger piece.');
      reset();
      return;
    }
    await createAndStorePiece(pieceWidth, pieceHeight, xOffset, yOffset);

    reset();
  };

  //@ts-ignore
  CanvasRenderingContext2D.prototype.clipPathFromPoints = function (
    points: { x: number; y: number }[],
    xOffset: number,
    yOffset: number
  ) {
    this.beginPath();

    points.forEach(({ x, y }, index) => {
      if (index === 0) {
        this.moveTo(x - xOffset, y - yOffset);
      } else {
        this.lineTo(x - xOffset, y - yOffset);
      }
    });
    this.closePath();
    this.clip();
  };

  const createAndStorePiece = (
    width: number,
    height: number,
    xOffset: number,
    yOffset: number
  ) => {
    const pieceCanvas = document.createElement('canvas');
    pieceCanvas.width = width;
    pieceCanvas.height = height;
    const pieceCanvasCtx = pieceCanvas.getContext('2d');

    if (!pieceCanvasCtx) return;

    pieceCanvasCtx?.clipPathFromPoints(points, xOffset, yOffset);

    // Draw the background from the main canvas
    pieceCanvasCtx.drawImage(
      mainCtx.canvas,
      xOffset,
      yOffset,
      width,
      height,
      0,
      0,
      width,
      height
    );

    // Apply the user's drawing from the draw canvas
    pieceCanvasCtx.globalCompositeOperation = 'source-atop';
    pieceCanvasCtx.drawImage(
      piecesRef.current,
      xOffset,
      yOffset,
      width,
      height,
      0,
      0,
      width,
      height
    );

    // Exclude parts that overlap with shapes on the pieces canvas
    pieceCanvasCtx.globalCompositeOperation = 'destination-out';
    pieceCanvasCtx.drawImage(
      piecesCtx.canvas,
      xOffset,
      yOffset,
      width,
      height,
      0,
      0,
      width,
      height
    );
    pieceCanvasCtx.closePath();
    pieceCanvasCtx.clip();

    const dropZone = {
      x: xOffset + width / 2,
      y: yOffset + height / 2
    };

    //close and fill path
    if (points.length && piecesCtx) {
      piecesCtx.beginPath();

      points.forEach((point: any) => {
        piecesCtx?.lineTo(point.x, point.y);
      });
      piecesCtx?.closePath();
      piecesCtx.fillStyle = ' #d3d3d3';
      piecesCtx.fill();
    }

    setPieces([
      ...pieces,
      { points, image: pieceCanvas.toDataURL(), dropZone }
    ]);
  };

  return { startDrawing, draw, finishDrawing, isDrawing };
};
export default useDrawing;
