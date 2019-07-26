import React from "react";
import QuoteForm from "./QuoteForm";
import UserQuote from "./UserQuote";

class UsersQuoteList extends React.Component {
  state = {
    quotes: [],
    quoteToShow: "all"
  };

  addQuote = quote => {
    this.setState(state => ({
      quotes: [quote, ...state.quotes]
    }));
  };

  toggleFavorite = id => {
    this.setState({
      quotes: this.state.quotes.map(quote => {
        //suppose to update
        if (quote.id === id) {
          return {
            ...quote,
            favorite: !quote.favorite
          };
        } else {
          return quote;
        }
      })
    });
  };

  updateQuoteShow = x => {
    this.setState({
      quoteToShow: x
    });
  };

  handleDeleteQuote = id => {
    this.setState({
      quotes: this.state.quotes.filter(quote => quote.id !== id)
    });
  };

  removeAllQuotes = id => {
    this.setState({
      quotes: this.state.quotes.filter(
        quote => quote.id !== id && quote.id === id
      )
    });
  };

  // removeNonFavorites = () => {
  //   this.setState({
  //     quotes: this.state.quotes.filter(quote => quote.favorite)
  //   });
  // };

  //state passed as a parameter
  removeNonFavorites = () => {
    this.setState(state => ({
      quotes: state.quotes.filter(quote => quote.favorite)
    }));
  };

  render() {
    let quotes = [];

    if (this.state.quoteToShow === "all") {
      quotes = this.state.quotes;
    } else if (this.state.quoteToShow === "favorites") {
      quotes = this.state.quotes.filter(quote => quote.favorite);
    }

    return (
      <>
        <QuoteForm onSubmit={this.addQuote} />
        {quotes.map(quote => (
          <UserQuote
            key={quote.id}
            onFav={() => this.toggleFavorite(quote.id)}
            onDelete={() => this.handleDeleteQuote(quote.id)}
            quote={quote}
          />
        ))}
        <div className="search">
          <button onClick={() => this.updateQuoteShow("all")}>All</button>
          <button onClick={() => this.updateQuoteShow("favorites")}>
            Favorites
          </button>
          {this.state.quotes.filter(quote => quote).length ? (
            <button onClick={this.removeAllQuotes}>Remove All</button>
          ) : null}
          {this.state.quotes.filter(quote => quote.favorite).length ? (
            <button onClick={this.removeNonFavorites}>Rem NonFavorites</button>
          ) : null}
          {/* <div className="favnum">
            Favorite Quotes:{" "}
            {this.state.quotes.filter(quote => quote.favorite).length}
          </div> */}
        </div>
      </>
    );
  }
}

export default UsersQuoteList;
