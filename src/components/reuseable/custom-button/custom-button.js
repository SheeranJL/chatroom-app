import React from 'react';

const CustomButton = ({children, buttonType, onClick}) => {

  return (
    <button
      onClick={onClick}
      type={buttonType}
    >
      {children}
    </button>
  )
};

export default CustomButton;
