import React from "react";
import Characters from "../data/Characters";

function Rightbar(props) {

  return (
    <div className="right_bar">
      {props.pageState == "character" && (
        <div className="menu">
          <ul>
            <li>
              <a onClick={function () {
                  props.onClick("desc");
                }}
              >
                <span style={ props.characterMenu == 0 ? {
                      backgroundColor: Characters[props.characterIndex].color
                    } : {}}>소개</span>
              </a>
            </li>
            <li>
              <a onClick={function () {
                  props.onClick("image");
                }}
              >
                <span style={ props.characterMenu == 1 ? {
                      backgroundColor: Characters[props.characterIndex].color
                    } : {}}>프로필</span>
              </a>
            </li>
          </ul>
        </div>
      )}
      {props.pageState == "gallery" && (
        <div
          className="next_button"
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

export default Rightbar;