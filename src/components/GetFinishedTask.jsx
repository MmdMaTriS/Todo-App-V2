import React from "react";
import PropTypes from "prop-types";

const GetFinishedTask = ({ data }) => {
  let getArr = [];
  function Counter() {
    data.map((t) => {
      return t.isDone ? getArr.push(t.isDone) : null;
    });
    return getArr.length;
  }
  return (
    <>
      <span>{Counter()}</span>
    </>
  );
};

export default GetFinishedTask;

GetFinishedTask.prototype = {};
