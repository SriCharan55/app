import React from "react";

const SpinnerLoader = () => {
  return (
    <svg
      aria-hidden="true"
      className="w-4 h-4 text-gray-200 animate-spin fill-white"
      viewBox="0 0 100 101"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051..."
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409..."
        fill="currentFill"
      />
    </svg>
  );
};

export default SpinnerLoader;
