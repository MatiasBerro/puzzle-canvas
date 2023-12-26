import { calculateDropZone, isCloseEnough } from '@/lib/utils';
import useGameStore from '@/store';
import { ItemTypes } from '@/types';
import { useDrop } from 'react-dnd';

const useDropHook = () => {
  const pieces = useGameStore((state) => state.pieces);
  const restorePiece = useGameStore((state) => state.restorePiece);
  const drawCtx = useGameStore((state) => state.drawCtx);

  const [{ isOver }, dropRef] = useDrop({
    accept: ItemTypes.PUZZLE_PIECE,
    drop: (item: any, monitor) => {
      const clientOffset = monitor.getClientOffset();

      if (clientOffset && pieces[item.index]) {
        const droppedPiece = pieces[item.index];
        const originalZone = droppedPiece.dropZone;

        // Calculate the dropped zone based on the client offset and piece dimensions
        const droppedZone = calculateDropZone(clientOffset, droppedPiece);

        const canvasOffset = drawCtx?.canvas.getBoundingClientRect();
        if (isCloseEnough(canvasOffset, droppedZone, originalZone)) {
          restorePiece(item.index, true);
        }
      }
    },

    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  });

  return { dropRef, isOver };
};
export default useDropHook;
