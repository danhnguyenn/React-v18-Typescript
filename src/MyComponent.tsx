import React, { useRef } from 'react';

const MyComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const doSomeThing = () => {
    console.log('All the properties and methods of the input', inputRef.current);
  };

  doSomeThing();

  return <input ref={inputRef} type="text" />;
};

export default MyComponent;
