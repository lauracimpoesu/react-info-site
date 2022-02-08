import React from "react";
import ReactDOM from "react-dom";

function Aside() {
  return (
    <div className="reasons__container">
      <h1 className="reasons__title">Reasons I'm excited to learn React</h1>
      <ol className="reasons__list">
        <li className="reasons__list__items">
          I can build almost everything i want with it.
        </li>
        <li className="reasons__list__items">
          It's JavaScript based and i really enjoy JS.
        </li>
        <li className="reasons__list__items">
          It's the most demanding skill in the Tech industry.
        </li>
        <li className="reasons__list__items">
          I want to become a React Expert.
        </li>
      </ol>
    </div>
  );
}

export default Aside;
