import React from "react";
import { Prompt } from "react-router-dom";

const ManageQuotePage = props => {
  //   debugger;
  return (
    <>
      <h2>Manage Quotes</h2>
      <Prompt when={true} message="Are you sure you want to leave?" />
      {props.match.params.slug}
    </>
  );
};

export default ManageQuotePage;
