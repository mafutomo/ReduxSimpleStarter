export function selectBook(book) {
  //selectBook is an ActionCreator, it needs to return an action, an object with a type of property
  //Actions have 2 values: Type & Payload
  //Payload clarifies the conditions of the action being triggered
  //Every action must have a type that describes the purpose of the action. Always upper case.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
  console.log('a book has been selected:', book.title);
}
