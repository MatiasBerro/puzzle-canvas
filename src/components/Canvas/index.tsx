'use client';
import React, { useEffect, useRef } from 'react';
import useGameStore from '@/store';
import { useRouter } from 'next/navigation';
import useDrawing from '@/hooks/useDrawing';

import {
  CanvasContainer,
  MainCanvas,
  DrawingCanvas,
  PiecesCanvas
} from './Canvas.styles';
import clsx from 'clsx';
import useDrop from '@/hooks/useDrop';
import { startConfetti } from '@/lib/utils';

const Canvas = ({ image }: { image: string | null }) => {
  const router = useRouter();
  const setCurrentImage = useGameStore((state) => state.setCurrentImage);
  const setMainCtx = useGameStore((state) => state.setMainCtx);
  const setDrawCtx = useGameStore((state) => state.setDrawCtx);
  const setPiecesCtx = useGameStore((state) => state.setPiecesCtx);
  const setCanvas = useGameStore((state) => state.setCanvas);
  const setGameCompleted = useGameStore((state) => state.setGameCompleted);

  const gameCompleted = useGameStore((state) => state.gameCompleted);
  const images = useGameStore((state) => state.images);
  const canvasRef = useRef(null);
  const drawRef = useRef(null);
  const piecesRef = useRef(null);

  const { startDrawing, draw, finishDrawing, isDrawing } = useDrawing(
    canvasRef,
    drawRef,
    piecesRef
  );
  const { dropRef } = useDrop();

  useEffect(() => {
    if (images?.length === 0) {
      console.error('Please add an image first');
      router.push('/');
      return;
    }
    const mainCanvas = canvasRef.current;

    if (!mainCanvas) return;

    const ctx = mainCanvas.getContext('2d');
    const img = new Image();
    img.src = images[parseInt(image as string)];

    img.onload = () => {
      let scale = Math.max(
        mainCanvas.width / img.width,
        mainCanvas.height / img.height
      );
      let x = mainCanvas.width / 2 - (img.width / 2) * scale;
      let y = mainCanvas.height / 2 - (img.height / 2) * scale;

      ctx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      setCurrentImage(img);
    };

    setCanvas({
      main: mainCanvas,
      draw: drawRef.current,
      pieces: piecesRef.current
    });
    setMainCtx(ctx);
    setDrawCtx(drawRef.current.getContext('2d'));
    setPiecesCtx(piecesRef.current.getContext('2d'));
  }, []);

  useEffect(() => {
    if (gameCompleted) {
      startConfetti();
    }
  }, [gameCompleted]);

  return (
    <CanvasContainer ref={dropRef}>
      <DrawingCanvas
        ref={drawRef}
        width={800}
        height={600}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={finishDrawing}
        drawing={isDrawing}
        className={clsx(isDrawing ? 'cutting-cursor' : 'scissors-cursor')}
      />
      <PiecesCanvas ref={piecesRef} width={800} height={600} />
      <MainCanvas ref={canvasRef} width={800} height={600} />
    </CanvasContainer>
  );
};

export default Canvas;
