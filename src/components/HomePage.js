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
          <button
            style={{
              marginTop: "20px",
              marginLeft: "120px",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "800",
              color: "rgb(34, 38, 75)",
              fontFamily: "EB Garamond"
            }}
            onClick={this.fetchSearchResults}
          >
            Another one?
          </button>
        </section>
      </div>
    );
  }
}

export default HomePage;
