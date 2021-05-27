import {createStore} from 'redux';

function playlist(state = '', action) {
  if (action.type === 'ADD_USER') {
    return action.userId;
  }
  if (action.type === 'ADD_THEME') {
    return action.theme;
  }
}
// store.subscribe(() => {
//   console.log(store.getState());
// })

export default playlist;


// store.dispatch({ type: 'ADD_USER', userId: 'Smells like spirit' });

// function ChangeStore(type, value){
//   switch (type) {
//     case "ADD_USER":
//       store.dispatch({ type: type, userId: value });
//       break;
//     case "ADD_THEME":
//       store.dispatch({ type: type, theme: value });
//       break;

//   }
// }
