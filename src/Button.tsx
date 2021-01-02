import React from 'react';

interface IButtonProps {
  text: string;
}

function Button({ text }: IButtonProps) {
  return (
    <>
      <div>{text}</div>
      <button>Button</button>
    </>
  );
}

export default Button;
