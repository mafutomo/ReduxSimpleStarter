//default state the null because Redux does not accept undefined.
export default function(state = null, action) {
  //all reducers get two arguments: current state and action
  //state argument is NOT application state, only the state this reducer is responsible for
  //reducer only called when action called
  //never mutate our current state, must be 100% fresh, clean
  switch (action.type){
    case 'BOOK_SELECTED':
      return action.payload;
      //don't do:
      //state.title = book.title
      //return state
  }
  return state;
}
