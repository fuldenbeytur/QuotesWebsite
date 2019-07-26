import React from "react";
import shortid from "shortid";

class QuoteForm extends React.Component {
  state = {
    text: "",
    author: "",
    favorite: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      author: this.state.author,
      favorite: false
    });
    this.setState({
      text: "",
      author: ""
    });
  };
  render() {
    return (
      <div className="quoteForm">
        <h2>My Quotes</h2>
        <div className="search">
          <form onSubmit={this.handleSubmit}>
            <input
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
              placeholder="add your quote..."
            />
            <input
              name="author"
              value={this.state.author}
              onChange={this.handleChange}
              placeholder="add author..."
            />
            <button onClick={this.handleSubmit}>Add Quote</button>
          </form>
        </div>
      </div>
    );
  }
}

export default QuoteForm;
