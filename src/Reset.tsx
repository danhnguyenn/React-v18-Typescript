import React, { memo } from 'react';

type Props = {
  onClick: () => void;
  children?: React.ReactNode;
};

const Reset = memo(({ onClick, children }: Props) => {
  console.log('Render Reset');
  return <button onClick={onClick}>{children}</button>;
});

export default Reset;
