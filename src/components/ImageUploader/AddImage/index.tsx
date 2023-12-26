'use client';

import React, { useRef } from 'react';
import useGameStore from '@/store';
import AddIcon from '@/icons/Add';
import {
  AddImageButtonContainer,
  AddButton,
  UploadText
} from './AddImage.styles';

function AddImage() {
  const fileInputRef = useRef(null);
  const addImage = useGameStore((state) => state.addImage);

  const handleFilesChange = (event: { target: { files: FileList | null } }) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e) => {
            if (!e?.target?.result) return;
            addImage(e.target.result as string);
          };
          reader.readAsDataURL(file);
        }
      });
    }
  };

  return (
    <AddImageButtonContainer>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFilesChange}
        style={{ display: 'none' }}
        accept="image/*"
        multiple
      />
      <AddButton
        onClick={() => fileInputRef.current && fileInputRef.current.click()}
      >
        <AddIcon color="white" />

        <UploadText>Upload Images</UploadText>
      </AddButton>
    </AddImageButtonContainer>
  );
}

export default AddImage;
