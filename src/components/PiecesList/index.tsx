import React, { useEffect } from 'react';
import useGameStore from '@/store';
import {
  PiecesListContainer,
  PiecesUl,
  NoPiecesContainer
} from './PiecesList.styles';
import PieceItem from './PieceItem';
import ShuffleButton from './ShuffleButton';

function PiecesList() {
  const pieces = useGameStore((state) => state.pieces);

  return (
    <PiecesListContainer>
      <PiecesUl>
        {pieces.length === 0 ? (
          <NoPiecesContainer>
            <p>Please draw a path to create a puzzle piece</p>
          </NoPiecesContainer>
        ) : (
          pieces.map((piece, index) => (
            <PieceItem piece={piece} key={index} index={index} />
          ))
        )}
      </PiecesUl>
      <ShuffleButton />
    </PiecesListContainer>
  );
}

export default PiecesList;
