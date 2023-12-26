import ShuffleIcon from '@/icons/Shuffle';
import useGameStore from '@/store';
import React from 'react';
import { ShuffleButtonWrapper } from './ShuffleButton.styles';

function ShuffleButton() {
  const pieces = useGameStore((state) => state.pieces);
  const setPieces = useGameStore((state) => state.setPieces);

  return (
    <ShuffleButtonWrapper
      onClick={() => {
        setPieces([...pieces].sort(() => Math.random() - 0.5));
      }}
      show={pieces.length > 2 ? true : false}
    >
      <ShuffleIcon />
    </ShuffleButtonWrapper>
  );
}

export default ShuffleButton;
