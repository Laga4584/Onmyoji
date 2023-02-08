import React, { useEffect, useState } from "react";
import axios from "axios";

function Script() {
  const [scriptList, setScriptList] = useState([{ line: "" }]);
  const [scriptIndex, setScriptIndex] = useState(0);

  // DB에서 스크립트 데이터 가져오기
  const getList = () => {
    axios
      .post("/api2/getScript", {})
      .then((res) => {
        const { data } = res;
        setScriptList(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  if (scriptList.length > 0)
    return (
      <section
        className="sec_5"
        onClick={function () {
          setScriptIndex(scriptIndex + 1);
        }}
      >
        <div className="img_wrap">
          <div
            className="bg"
            style={{
              backgroundImage:
                "url('assets/script/" +
                scriptList[scriptIndex].background +
                ".png')",
            }}
          ></div>
          {scriptList[scriptIndex].character1 &&
            scriptList[scriptIndex].talking === 0 && (
              <div
                className="chr1"
                style={{
                  backgroundImage:
                    "url('assets/script/" +
                    scriptList[scriptIndex].character1 +
                    ".png')",
                }}
              ></div>
            )}
          {scriptList[scriptIndex].character1 &&
            scriptList[scriptIndex].talking === 1 && (
              <div
                className="chr1"
                style={{
                  backgroundImage:
                    "url('assets/script/" +
                    scriptList[scriptIndex].character1 +
                    ".png')",
                  filter: "brightness(40%)",
                }}
              ></div>
            )}
          {scriptList[scriptIndex].character2 &&
            scriptList[scriptIndex].talking === 1 && (
              <div
                className="chr2"
                style={{
                  backgroundImage:
                    "url('assets/script/" +
                    scriptList[scriptIndex].character2 +
                    ".png')",
                }}
              ></div>
            )}
          {scriptList[scriptIndex].character2 &&
            scriptList[scriptIndex].talking === 0 && (
              <div
                className="chr2"
                style={{
                  backgroundImage:
                    "url('assets/script/" +
                    scriptList[scriptIndex].character2 +
                    ".png')",
                  filter: "brightness(40%)",
                }}
              ></div>
            )}
          <div className="line">{scriptList[scriptIndex].line}</div>
        </div>
      </section>
    );
}

export default Script;
