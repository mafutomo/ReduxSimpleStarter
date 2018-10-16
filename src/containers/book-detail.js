import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render(){
    //to take care of initial render where book is null (warm up state since user has not done anything yet). Otherwise there will be an error because we are sending off a null value.
    if(!this.props.book){
      return <div>Select a book to get started</div>;
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    book: state.activeBook
  };
}

//to connect the component
export default connect (mapStateToProps)(BookDetail);
