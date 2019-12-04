const initialState = { count: 0 };
type StateType = {
  count: number
}
type ActionType = {
  type: 'reset' | 'decrement' | 'increment'
}

export function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}