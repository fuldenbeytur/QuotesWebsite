import React, { useState, useEffect } from "react";
import QuoteList from "./QuoteList";
import "../app.css";

function QuotePage(props) {
  const [quotes, setQuotes] = useState([]);
  const [query, setQuery] = useState("");
  // const [favQuotes, setFavQuotes] = useState([]);
  // const [addedFav, setAddedFav] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    randomQuotes();
  }, []);

  // function addFav(id) {
  //   quotes.map(quote => {
  //     //suppose to update
  //     if (quote.id === id) setAddedFav(!addedFav);
  //   });

  //   console.log(addedFav);
  //   console.log(id);
  //   console.log("hello");
  // }

  const handleChange = event => {
    setQuery(event.target.value);
    console.log(query);
  };

  function randomQuotes(event) {
    const searchUrl = "https://favqs.com/api/quotes";

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
        const resultNotFoundMsg = !res.quotes.length
          ? "there are no more search result."
          : "";
        setQuotes(res.quotes);
        setMessage(resultNotFoundMsg);

        console.log(res.quotes);
        console.log(message);
      })
      .catch(error => {
        if (error) {
          setMessage("Failed to fetch data.");
        }
      });
  }

  function fetchSearchByWord(event) {
    console.log(query);
    const searchUrl = "https://favqs.com/api/quotes/?filter=" + query;
    console.log(searchUrl);

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
        const resultNotFoundMsg = !res.quotes.length
          ? "there are no more search result."
          : "";
        setQuotes(res.quotes);
        setMessage(resultNotFoundMsg);

        console.log(res.quotes);
      })
      .catch(error => {
        if (error) {
          setMessage("Failed to fetch data.");
        }
      });
  }

  function fetchSearchByAuthor(event) {
    console.log(query);
    const searchUrl =
      "https://favqs.com/api/quotes/?filter=" + query + "&type=author";
    console.log(searchUrl);

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
        const resultNotFoundMsg = !res.quotes.length
          ? "there are no more search result."
          : "";
        setQuotes(res.quotes);
        setMessage(resultNotFoundMsg);

        console.log(res.quotes);
      })
      .catch(error => {
        if (error) {
          setMessage("Failed to fetch data.");
        }
      });
  }

  return (
    <section className="quotes">
      <div className="search">
        <input
          className="input"
          type="text"
          placeholder="Type a word or author"
          onChange={handleChange}
          value={props.value}
        />
        <button className="searchquote" onClick={fetchSearchByWord}>
          Search by Word
        </button>
        <button className="searchauthor" onClick={fetchSearchByAuthor}>
          Search by Author
        </button>
        {/* <button className="favButton">Favorites</button> */}
      </div>

      <QuoteList quotes={quotes} />
    </section>
  );
}

export default QuotePage;
