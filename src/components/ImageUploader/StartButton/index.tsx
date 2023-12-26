'use client';
import React from 'react';
import Arrow from '@/icons/Arrow';
import Link from 'next/link';
import {
  StartButtonContainer,
  StartButtonText,
  StartButtonWrapper
} from './StartButton.styles';

interface StartButtonProps {
  selectedImage: number;
}

function StartButton({ selectedImage }: StartButtonProps) {
  return (
    <StartButtonWrapper>
      <Link
        href={`/game?image=${selectedImage}`}
        style={{
          textDecoration: 'none'
        }}
      >
        <StartButtonContainer>
          <StartButtonText>Start</StartButtonText>

          <Arrow color="white" />
        </StartButtonContainer>
      </Link>
    </StartButtonWrapper>
  );
}

export default StartButton;
