import React, {useRef, useCallback, useEffect} from "react";

function Home() {
  const secRef = useRef(null);
  const videoRef = useRef(null);
    const handleScroll = useCallback(
        ([entry]) => {
          if (entry.isIntersecting) {
            videoRef.current.muted = true;
            videoRef.current.play();
            videoRef.current.muted = false;
          }else{
             videoRef.current.pause();
          };
        }, []
      );
    
      useEffect(() => {
        /*
        window.scrollTo({
          left: 0,
          top:
            window.innerHeight,
          behavior: "smooth",
        });
        */
       
        let observer;
    
        if (videoRef.current) {
          observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
          observer.observe(videoRef.current);
        }
    
        return () => observer && observer.disconnect();
      }, [handleScroll]);

      const onWheel = (e) => {
        if (e.deltaY > 0){
          window.scrollTo({
            left: 0,
            top:
              window.innerHeight,
            behavior: "smooth",
          });
        }else {
          window.scrollTo({
            left: 0,
            top:
              0,
            behavior: "smooth",
          });
        }
      }
    
  return (
    <section className="sec_1" onWheel={onWheel}>
      <div className="home_bg">
      <div className="title_area">
        <h1 className="text_light">천년의 수호</h1>
      </div>
      <div className="down_button">
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      </div>
      <video type="video/mp4" src="assets/story/cg.mp4" controls="controls" ref={videoRef}></video>
    </section>
  );
}

export default Home;
