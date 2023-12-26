import React from 'react';
import styled from 'styled-components';

function RemoveIcon(props: {
  onClick?: () => void;
  color?: string;
  size?: number;
}) {
  const { onClick, color = '#e06666', size = 30 } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="m14.5 9.5-5 5m0-5 5 5M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default RemoveIcon;
