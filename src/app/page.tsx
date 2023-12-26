'use client';

import ImageUploader from '@/components/ImageUploader';
import useGameStore from '@/store';
import React, { useEffect } from 'react';

function Home() {
  const setPieces = useGameStore((state) => state.setPieces);

  useEffect(() => {
    setPieces([]);
  }, []);

  return <ImageUploader />;
}

export default Home;
