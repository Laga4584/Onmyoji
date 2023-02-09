import React from "react";
import { useEffect, useRef } from "react";
import Characters from "../data/Characters";

function Character(props) {
  const secRef = useRef(null);

  useEffect(() => {
    
    window.scrollTo({
      left: secRef.current.getBoundingClientRect().width * props.characterMenu,
      top:
        secRef.current.getBoundingClientRect().height * props.characterIndex,
      behavior: "smooth",
    });
   
    console.log(props.characterIndex);
    console.log(props.characterMenu);
    
  }, [props.characterIndex, props.characterMenu]);

  return (
    <section className="sec_3" ref={secRef}>
      <div className="character_list">
        <ul>
          {Characters.map((val, ind) => {
            
              return (
                <li key={ind}>
                  <div className={ ind == props.characterIndex ? 'active' : 'notActive'}
                    style={{
                      backgroundImage: val.thumbnail,
                    }}
                    onClick={function () {
                      props.onClick(ind);
                    }}
                  ></div>
                  <p>{val.name}</p>
                </li>
              );
            
          })}
        </ul>
      </div>
      <div className="character_bg"></div>
      <div className="character_wrap" onWheel={function (e) {
      props.onWheel(e.deltaY);
    }}>
      {Characters.map((val, ind) => {
        return (
          <div key={ind} className="character">
          <div className="character_desc">
            <div className="desc_text">
              <h1
                className="text_light"
                style={{
                  color: val.color,
                  borderBottomColor: val.color,
                }}
              >
                {val.name}
              </h1>
              <p>{val.desc}</p>
            </div>
            <div
              className="desc_img"
              style={{
                backgroundImage: val.image,
              }}
            ></div>
          </div>
          <div className="character_image" style={{
                backgroundImage: val.image2,
              }}>
          </div>
          </div>
        );
      })}
      </div>
    </section>
  );
}

export default Character;
