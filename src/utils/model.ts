export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}
// type Actions =
//   | {
//       type: 'Add';
//       payload: string;
//     }
//   | {
//       type: 'remove';
//       payload: number;
//     }
//   | {
//       type: 'done';
//       payload: number;
//     };
// const TodoReducer = (state: Todo[], action: Actions) => {
//   switch (action.type) {
//     case 'Add':
//       return [
//         ...state,
//         { id: Date.now(), todo: action.payload, isDone: false },
//       ];
//     case 'remove':
//       return state.filter((todo) => todo.id !== action.payload);
//     case 'done':
//       return state.map((todo) =>
//         todo.id !== action.payload ? { ...todo, isDone: !todo.isDone } : todo
//       );

//     default:
//       return state;
//   }
// };
// import React from 'react';
// const ReducerExample = () => {
//   const [state, dispatch] = React.useReducer(TodoReducer, []);
//   return <div />;
// };

// export default ReducerExample;
