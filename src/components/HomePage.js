import React from "react";
import "../app.css";

class HomePage extends React.Component {
  state = {
    quotesofday: "",
    message: ""
  };

  componentDidMount() {
    console.log("hello");
    this.fetchSearchResults();
  }

  fetchSearchResults = () => {
    console.log("hellotoyou");
    const searchUrl = `https://favqs.com/api/qotd/`;
    fetch(searchUrl, {
      method: "GET",
      headers: {
        Authorization: "Token token=7783d6594bc1a980728e246aa4dc044f"
      }
    })
      .then(results => {
        return results.json();
      })
      .then(res => {
        console.log(res);
        const resultNotFoundMsg = !res.quote.length
          ? "there are no more search result."
          : "";
        this.setState({
          quotesofday: res.quote,
          message: resultNotFoundMsg
        });
        console.log(res.quote.body);
      })
      .catch(error => {
        if (error) {
          this.setState({
            message: "Failed to fetch data."
          });
        }
      });
  };

  render() {
    return (
      <div className="homePage">
        <section id="quoteOfDay">
          <h5 className="quoday">{this.state.quotesofday.body}</h5>
          <p className="author">{this.state.quotesofday.author}</p>
        </section>
      </div>
    );
  }
}

export default HomePage;
