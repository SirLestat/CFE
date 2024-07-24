import React from 'react';

export default function UpButton({ changeCount }) {
  return (
    <button
      onClick={() => {
        changeCount((prevValue) => {
          return prevValue + 1;
        });
      }}
    >
      +1
    </button>
  );
}
