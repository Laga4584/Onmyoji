import React from "react";

function Leftbar(props) {
  return (
    <div className="left_bar">
      {props.pageState == "character" && (
        <div className="scroll_bar">
          <div
            className="scroll_prev"
            onClick={function () {
              props.onClick("prev");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="text_rotate"></span>
          <div
            className="scroll_next"
            onClick={function () {
              props.onClick("next");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
      {props.pageState == "gallery" && (
        <div
          className="prev_button"
          onClick={function () {
            props.onClick("gallery");
          }}
        >
          <span></span>
        </div>
      )}
    </div>
  );
}

export default Leftbar;
