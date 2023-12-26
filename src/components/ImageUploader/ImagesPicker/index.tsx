'use client';

import React, { use, useEffect, useState } from 'react';
import useGameStore from '@/store';
import StartButton from '../StartButton';
import {
  ImageContainer,
  NoImagesContainer,
  PickerContainer,
  StyledImage,
  Subtitle,
  Title
} from './ImagesPicker.styles';

function ImagesPicker() {
  const images = useGameStore((state) => state.images);
  const [selectedImage, setSelectedImage] = useState(-1);

  return (
    <PickerContainer>
      {images.length === 0 && (
        <NoImagesContainer>
          <Title>No images uploaded yet</Title>
          <Subtitle>
            Click on <span>Upload Images</span> button to start
          </Subtitle>
        </NoImagesContainer>
      )}

      {images?.map((img: string, index: number) => (
        <ImageContainer key={index}>
          <StyledImage
            onClick={() => setSelectedImage(index)}
            selected={selectedImage === index}
            src={img}
            alt={`Uploaded ${index}`}
          />
          {selectedImage === index && (
            <StartButton selectedImage={selectedImage} />
          )}
        </ImageContainer>
      ))}
    </PickerContainer>
  );
}

export default ImagesPicker;
