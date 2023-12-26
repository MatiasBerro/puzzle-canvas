import { create } from 'zustand';
import { calculateXOffset, calculateYOffset } from '@/lib/utils';

type State = {
  canvas: HTMLCanvasElement | null;
  mainCtx: CanvasRenderingContext2D | null;
  drawCtx: CanvasRenderingContext2D | null;
  piecesCtx: CanvasRenderingContext2D | null;
  pieces: any[];
  currentImage: CanvasImageSource | null;
  images: string[];

  gameCompleted: boolean;
  addImage: (img: string) => void;
  setPieces: (any) => void;
  setCurrentImage: (image: CanvasImageSource | null) => void;
  restorePiece: (index: number, userDrop?: boolean) => void;
  setMainCtx: (ctx: CanvasRenderingContext2D) => void;
  setDrawCtx: (ctx: CanvasRenderingContext2D) => void;
  setPiecesCtx: (ctx: CanvasRenderingContext2D) => void;
  setCanvas: (any) => void;
  setGameCompleted: (gameCompleted: boolean) => void;
};

const useGameStore = create<State>((set, get) => ({
  canvas: null,
  pieces: [],
  currentImage: null,
  mainCtx: null,
  drawCtx: null,
  piecesCtx: null,
  images: [],
  gameCompleted: false,
  addImage: async (img) => {
    await set((state) => ({ images: [...state.images, img] }));
  },
  setCanvas: (canvas: any) => set({ canvas }),
  setPieces: async (newPieces) => {
    await set({ pieces: newPieces });
  },
  setCurrentImage: (currentImage) => set({ currentImage }),
  restorePiece: async (pieceIndex: number, userDrop = false) => {
    const pieces = get().pieces;
    const selectedPiece = pieces[pieceIndex];
    // Remove the piece from the list
    const newPieces = pieces.filter((_, index) => index !== pieceIndex);

    const restoredImage = new Image();
    restoredImage.src = selectedPiece.image; // Data URL of the piece's image

    restoredImage.onload = () => {
      get().piecesCtx.globalCompositeOperation = 'destination-out';
      get().piecesCtx?.drawImage(
        restoredImage,
        calculateXOffset(selectedPiece.points),
        calculateYOffset(selectedPiece.points)
      );
      get().piecesCtx.globalCompositeOperation = 'source-over';
    };

    const gameCompleted = userDrop && newPieces.length === 0;
    await set({
      pieces: newPieces,
      gameCompleted
    });
    setTimeout(() => {
      set({ gameCompleted: false });
    }, 1000);
  },
  setMainCtx: async (mainCtx) => await set({ mainCtx }),
  setDrawCtx: async (drawCtx) => await set({ drawCtx }),
  setPiecesCtx: async (piecesCtx) => await set({ piecesCtx }),
  setGameCompleted: async (gameCompleted) => await set({ gameCompleted })
}));

export default useGameStore;
