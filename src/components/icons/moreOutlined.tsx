import React from "react";

const MoreOutlined = ({ size = 24, color = "red", strokeWidth = 1.5, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 40 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="5" cy="12" r="4" />
      <circle cx="20" cy="12" r="4" />
      <circle cx="35" cy="12" r="4" />
    </svg>
  );
};

export default MoreOutlined;
