import React from 'react';

function MoveIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g
        clipPath="url(#a)"
        stroke="#292929"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m14 5-2-2m0 0-2 2m2-2v18m0 0 2-2m-2 2-2-2M19 14l2-2m0 0-2-2m2 2H3m0 0 2 2m-2-2 2-2" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default MoveIcon;
