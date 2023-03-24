import React, { useState } from 'react';

type Props = {
  type?: string;
  heading: String;
  children: React.ReactNode;
  closable?: boolean;
  onClose?: () => void;
};

const Alert = ({ type = 'information', heading, children, closable }: Props) => {
  const [visible, setVisible] = useState<boolean>();

  if (!visible) return <div>Gone!</div>;
  return (
    <div>
      <div>
        <span role="img" aria-label={type === 'warning' ? 'Warning' : 'Infomation'}>
          ⚠
        </span>
        <span>{type === 'warning' ? '⚠' : 'i'}</span>
        <span>{heading}</span>
      </div>
      {closable && (
        <button aria-label="Close">
          <span role="img" aria-label="Clost">
            X
          </span>
        </button>
      )}

      <div>{children}</div>
    </div>
  );
};

export default Alert;
