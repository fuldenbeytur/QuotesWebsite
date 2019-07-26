import React from "react";
import PropTypes from "prop-types";
import "../app.css";

// import { Link } from "react-router-dom";

function QuoteList(props) {
  return (
    <div className="quotePage">
      <h3>Which quote you would like to look for?</h3>
      <div className="quotelist">
        {props.quotes.map(quote => {
          return (
            <div className="content">
              <p key={quote.id}>
                {quote.body}
                <br /> <span className="authorName">{quote.author} </span>
                <br />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

QuoteList.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  ).isRequired
};

// QuoteList.defaultProps = {
//   quotes: []
// };

export default QuoteList;
