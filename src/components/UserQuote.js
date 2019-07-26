import React from "react";

export default props => (
  <div className="usersalllist">
    <div className="quotelist" style={{}}>
      <div
        className="usercontent"
        style={{
          color: props.quote.favorite ? "#b56969" : ""
        }}
        onClick={props.toggleFavorite}
      >
        <p>
          {props.quote.text}
          <br />
          <span>{props.quote.author}</span>
          <br />
          <button onClick={props.onDelete}>Delete</button>
          <button onClick={props.onFav}>Fav</button>
        </p>
      </div>
    </div>
  </div>
);
