import useGameStore from '@/store';
import React from 'react';
import {
  Button,
  ButtonWrapper,
  DialogBox,
  DialogContent,
  DialogText
} from './Dialog.styles';

function Dialog({
  isOpen,
  setIsOpen,
  index
}: {
  isOpen: boolean;
  setIsOpen: any;
  index: number;
}) {
  const restorePiece = useGameStore((state) => state.restorePiece);

  return (
    <DialogBox open={isOpen}>
      <DialogContent>
        <DialogText>Are you sure you want to delete this piece?</DialogText>
        <ButtonWrapper>
          <Button onClick={() => setIsOpen(false)} color={'#9CA3AF'}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              restorePiece(index);
              setIsOpen(false);
            }}
            color={'#EF4444'}
          >
            Delete
          </Button>
        </ButtonWrapper>
      </DialogContent>
    </DialogBox>
  );
}

export default Dialog;
