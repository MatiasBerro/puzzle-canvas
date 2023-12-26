'use client';
import React, { useEffect } from 'react';
import Canvas from '@/components/Canvas';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useRouter, useSearchParams } from 'next/navigation';
import Arrow from '@/icons/Arrow';
import PiecesList from '@/components/PiecesList';
import {
  AppContainer,
  BackButtonContainer,
  BackButtonText,
  ContentContainer
} from './Game.styles';
import useGameStore from '@/store';

function App() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const image = searchParams.get('image');
  const setGameCompleted = useGameStore((state) => state.setGameCompleted);

  return (
    <DndProvider backend={HTML5Backend}>
      <AppContainer>
        <BackButtonContainer onClick={() => router.push('/')}>
          <div
            style={{
              transform: 'rotate(180deg)'
            }}
          >
            <Arrow />
          </div>
          <BackButtonText onClick={() => setGameCompleted(false)}>
            Back
          </BackButtonText>
        </BackButtonContainer>

        <ContentContainer>
          <Canvas image={image} />
          <PiecesList />
        </ContentContainer>
      </AppContainer>
    </DndProvider>
  );
}

export default App;
