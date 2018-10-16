import { combineReducers } from 'redux';
import BooksReducer from './reducer_books.js';
//this reducer is going to add a key to our global application state called books
import ActiveBook from './reducer_active_book.js';

//any key to the object we add here ends up as a key to our global state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
});

export default rootReducer;
