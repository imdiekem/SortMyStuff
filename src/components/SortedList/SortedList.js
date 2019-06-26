import React, { Fragment } from "react";

import Button from "../UI/Button";

const makeList = list => {
  return list.length > 0
    ? [...list].map(lItem => {
        const lItemKey = Object.keys(lItem)[0];
        return (
          <div>
            <span>{lItemKey}: </span>
            <span>{lItem[lItemKey]}</span>
          </div>
        );
      })
    : null;
};

const sortedList = props => {
  const {
    merged,
    list,
    mergeStuff,
    sortStuffDescending,
    sortStuffAscending
  } = props;
  return (
    <Fragment>
      {makeList(list)}
      {!merged && <Button clickHandler={mergeStuff}>de-dupe stuff</Button>}
      {merged && (
        <Fragment>
          <Button clickHandler={sortStuffDescending}>sort descending</Button>
          <Button clickHandler={sortStuffAscending}>sort ascending</Button>
        </Fragment>
      )}
    </Fragment>
  );
};

export default sortedList;
