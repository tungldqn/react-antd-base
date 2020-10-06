import { useReducer } from 'react';

function setStateReducer(prevState, updatedProperty) {
  return {
    ...prevState,
    ...updatedProperty,
  }
}

function useMakeState(initState) {

  const [state, setState] = useReducer(setStateReducer, initState);

  return [state, setState];
}

export default useMakeState;
