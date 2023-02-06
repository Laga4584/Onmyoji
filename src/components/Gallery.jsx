import React, { useEffect, useRef } from "react";
import Images from "../data/Images";

function Gallery(props) {
  //const wrapRef = useRef(null);
  const secRef = useRef(null);

  useEffect(() => {
    if (secRef.current) {  
      secRef.current.scrollTo({
        left:
          (secRef.current.getBoundingClientRect().width) *
          props.galleryIndex,
        behavior: "smooth",
      });
      
    }
  }, [props.galleryIndex]);

  return (
    <section className="sec_4" ref={secRef}>
      <div
        className="image_wrap"
        onWheel={function (e) {
          props.onWheel(e.deltaY);
        }}
        
      >
        {Images.map((val, ind) => {
          return (
            <div
              key={ind}
              className="image"
              style={{ backgroundImage: val.image }}
            ></div>
          );
        })}
      </div>
      <div className="bottom_bar">
        <p>
          {Images[props.galleryIndex].title}
        </p>
      </div>
    </section>
  );
}

export default Gallery;
