import React from "react";

export const wrapWordsWithSpan = str =>
  str.split(" ").map((word, index) => <span key={index}>{word} </span>);
