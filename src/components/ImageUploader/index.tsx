'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import AddImage from './AddImage';
import ImagesPicker from './ImagesPicker';

export const Wrapper = styled.div`
  margin: 0 2.5rem;
`;

const ImageUploader = () => {
  return (
    <Wrapper>
      <AddImage />
      <ImagesPicker />
    </Wrapper>
  );
};

export default ImageUploader;
