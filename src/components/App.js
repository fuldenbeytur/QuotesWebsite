import React from "react";
import HomePage from "./HomePage";
import QuotePage from "./QuotePage";
import Header from "./common/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
// import ManageQuotePage from "./ManageQuotePage";
import UsersQuoteList from "./UsersQuoteList";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/QuotesWebsite" exact component={HomePage} />
        <Route path="/QuotesWebsite/quotes" component={QuotePage} />
        {/* <Route path="/news" component={AddQuote} /> */}
        {/* <Route path="/quote/:slug" component={ManageQuotePage} /> */}
        <Route path="/QuotesWebsite/addquote" component={UsersQuoteList} />
        <Redirect from="/addquote-page" to="addquote" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
