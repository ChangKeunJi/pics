import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // event : Object of bunch of info about event just occured.
  // onClick : User clicks on something
  // onChange : User changes text in an input
  // onSubmit : User submits a form

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }; // Passing callback function as a prop

  // Inside of instance of SearchBar
  // 'this' points to state / render / onFormSubmit()
  // How is the value of 'this' determined in a function ???
  //! 'this' is defined by WHERE it gets called.
  // Arrow function automatically bind 'this'.
  // Or invoke arrow function in JSX

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              value={this.state.term}
              type="text"
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

// Controlled vs Uncontrolled

// User types=> Callback gets invoked=> Call setState with the new value=>
// Componenet rerenders=> Input is told what its value is (coming from state)
