import React, { useEffect, useState, useReducer, useRef, useMemo, useCallback } from 'react';
import { getPerson } from './getPerson';
import Reset from './Reset';

type State = {
  name: string | undefined;
  score: number;
  loading: boolean;
};

type Action =
  | { type: 'initialize'; name: string }
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' };

const initialState = {
  name: undefined,
  score: 0,
  loading: true,
};

function sillyExpensiveFunction() {
  console.log('Executing silly function');
  let sum = 0;
  for (let i = 0; i < 10000; i++) {
    sum += i;
  }
  return sum;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'initialize':
      return { name: action.name, score: 0, loading: false };
    case 'increment':
      return { ...state, score: state.score + 1 };
    case 'decrement':
      return { ...state, score: state.score - 1 };
    case 'reset':
      return { ...state, score: 0 };
    default:
      return state;
  }
};

const PersonScore = () => {
  const [{ name, score, loading }, dispatch] = useReducer(reducer, initialState);
  const addButtonRef = useRef<HTMLButtonElement>(null);
  const expensiveCalculation = useMemo(() => sillyExpensiveFunction(), []);

  useEffect(() => {
    getPerson().then(({ name }) => {
      dispatch({ type: 'initialize', name });
      addButtonRef.current?.focus();
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      addButtonRef.current?.focus();
    }
  }, [loading]);

  const handleReset = useCallback(() => dispatch({ type: 'reset' }), []);

  if (loading) {
    return <div>Loading .....</div>;
  }

  return (
    <div>
      <h3>
        {name} , {score}
      </h3>
      <div>{expensiveCalculation}</div>
      <button ref={addButtonRef} onClick={() => dispatch({ type: 'increment' })}>
        Add
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Subtract</button>
      <Reset onClick={handleReset}>Reset</Reset>
    </div>
  );
};

export default PersonScore;
