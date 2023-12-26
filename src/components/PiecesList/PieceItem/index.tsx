'use client';
import React, { useEffect, useState } from 'react';

import {
  ListItem,
  Piece,
  StyledRemoveIcon,
  StyledMoveIcon,
  Wrapper
} from './PieceItem.styles';
import Dialog from '../Dialog';
import useDrag from '@/hooks/useDrag';
import RemoveIcon from '@/icons/Remove';
import MoveIcon from '@/icons/Move';

const PieceItem = ({
  piece,
  index
}: {
  piece: { image: string; dropZone: any };
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [canDrag, setCanDrag] = useState(false);
  const [hideIcon, setHideIcon] = useState(false);

  const { isDragging, dragRef } = useDrag(index, piece);

  useEffect(() => {
    if (!isDragging) {
      setHideIcon(false);
    }
  }, [isDragging]);

  if (!piece) return null;

  return (
    <>
      <ListItem
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        key={index}
      >
        {isHover && !hideIcon && (
          <StyledRemoveIcon onClick={() => setIsOpen(true)}>
            <RemoveIcon />
          </StyledRemoveIcon>
        )}

        <Wrapper ref={canDrag ? dragRef : null}>
          <Piece src={piece.image} />

          {isHover && (
            <StyledMoveIcon
              onMouseUp={() => setHideIcon(false)}
              onMouseDown={() => setHideIcon(true)}
              onMouseEnter={() => setCanDrag(true)}
              onMouseLeave={() => setCanDrag(false)}
            >
              <MoveIcon />
            </StyledMoveIcon>
          )}
        </Wrapper>
      </ListItem>
      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} index={index} />
    </>
  );
};

export default PieceItem;
