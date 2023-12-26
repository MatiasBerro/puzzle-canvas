import useGameStore from '@/store';
import confetti from 'canvas-confetti';

// Define a Point interface with x and y coordinates as numbers
interface Point {
  x: number;
  y: number;
}

export function calculateWidth(points: Point[]) {
  const xs = points.map((p) => p.x);
  return Math.max(...xs) - Math.min(...xs);
}
export function calculateHeight(points: Point[]) {
  const ys = points.map((p) => p.y);
  return Math.max(...ys) - Math.min(...ys);
}
export function calculateXOffset(points: Point[]) {
  const xs = points.map((p) => p.x);
  return Math.min(...xs);
}
export function calculateYOffset(points: Point[]) {
  const ys = points.map((p) => p.y);
  return Math.min(...ys);
}

// Determine if a dropped zone is close enough to an original zone based on a threshold
export function isCloseEnough(
  canvasOffset,
  droppedZone,
  originalZone,
  threshold = 40
) {
  const droppedPosition = {
    x: droppedZone.x - canvasOffset.x,
    y: droppedZone.y - canvasOffset.y
  };

  const isCloseEnough =
    Math.abs(droppedPosition.x - originalZone.x) < threshold &&
    Math.abs(droppedPosition.y - originalZone.y) < threshold;

  return isCloseEnough;
}

// Update the composite image on the canvas
export function updateCompositeImage(
  canvas: HTMLCanvasElement | null,
  pieces: any // Array of piece data
) {
  const drawCtx = useGameStore.getState().drawCtx;
  const currentImage: any = useGameStore.getState().currentImage;

  if (!drawCtx || !canvas) return;

  drawCtx.clearRect(0, 0, canvas.width, canvas.height);

  let scale = Math.max(
    canvas.width / currentImage.width,
    canvas.height / currentImage.height
  );

  let x = canvas.width / 2 - (currentImage.width / 2) * scale;
  let y = canvas.height / 2 - (currentImage.height / 2) * scale;

  // Draw the current image on the canvas, scaled and centered
  drawCtx.drawImage(
    currentImage,
    x,
    y,
    currentImage.width * scale,
    currentImage.height * scale
  );

  // Iterate over each piece data and apply masking
  pieces.forEach((pieceData: any) => {
    const maskCanvas = document.createElement('canvas');
    const maskCtx = maskCanvas.getContext('2d');
    if (!maskCtx) return;

    maskCanvas.width = 800;
    maskCanvas.height = 600;

    maskCtx.beginPath();
    pieceData.points.forEach((point: Point, index: number) => {
      const method = index === 0 ? 'moveTo' : 'lineTo';
      maskCtx[method](point.x, point.y);
    });
    maskCtx.closePath();
    maskCtx.fill();

    drawCtx.globalCompositeOperation = 'destination-out';
    drawCtx.drawImage(maskCanvas, 0, 0);
    drawCtx.globalCompositeOperation = 'source-over';
  });
}

// Calculate the dimensions and offsets of a piece based on its points
export const calculatePieceDimensions = (points: any) => [
  calculateWidth(points),
  calculateHeight(points),
  calculateXOffset(points),
  calculateYOffset(points)
];

// Calculate the drop zone for a piece based on the client's offset and piece data
export const calculateDropZone = (clientOffset: any, piece: any) => {
  const x = clientOffset.x;
  const y = clientOffset.y;

  return { x, y };
};

export const startConfetti = () => {
  confetti({
    // customize your confetti here
    particleCount: 300,
    spread: 100,
    origin: { y: 0.6 },
    zIndex: 1000
  });
};
