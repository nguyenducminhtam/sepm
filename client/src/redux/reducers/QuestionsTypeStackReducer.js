import {POP_CURRENT_STACK, SET_CURRENT_STACK} from '../types';

let updatedStack = [];

const questionsTypeStackReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CURRENT_STACK:
      return {...state, currentStack: action.payload};
    case POP_CURRENT_STACK:
      updatedStack = state.currentStack.filter(
        stack => stack !== action.payload,
      );
      return {...state, currentStack: updatedStack};
    default:
      return state;
  }
};

export default questionsTypeStackReducer;
