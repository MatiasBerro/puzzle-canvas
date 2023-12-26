import { ItemTypes } from '@/types';
import { useDrag } from 'react-dnd';

const useDragHook = (index: number, piece: any) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: ItemTypes.PUZZLE_PIECE,
    item: { index, ...piece },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }));

  return { dragRef, isDragging };
};

export default useDragHook;
