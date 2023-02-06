import React, {useRef, useEffect, useCallback} from "react";
import Conversation from "../data/Conversation";
import useScrollFadeIn from '../hooks/useScrollFadeIn';

function Story() {
    const fadeInImage = [useScrollFadeIn('right', 1, 0), useScrollFadeIn('left', 1, 0), useScrollFadeIn('right', 1, 0), useScrollFadeIn('left', 1, 0), useScrollFadeIn('right', 1, 0), useScrollFadeIn('right', 1, 0), useScrollFadeIn('right', 1, 0), useScrollFadeIn('right', 1, 0), useScrollFadeIn('right', 1, 0), useScrollFadeIn('left', 1, 0.5)];
    const fadeInText = [useScrollFadeIn('up', 1, 0), useScrollFadeIn('up', 1, 0), useScrollFadeIn('up', 1, 0), useScrollFadeIn('up', 1, 0), useScrollFadeIn('up', 1, 0), useScrollFadeIn('up', 1, 0), useScrollFadeIn('up', 1, 0), useScrollFadeIn('up', 1, 0)]
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
        let observer;
    
        if (videoRef.current) {
          observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
          observer.observe(videoRef.current);
        }
    
        return () => observer && observer.disconnect();
      }, [handleScroll]);
    
        return (
            <section className="sec_2">
                <div className="scene">
                    <div className="scene_bg"></div>
                    <div className="scene_text">
                        태초부터 존재했던 거대한 뱀이 어느 날 고개를 들고 태양에게 물었습니다.
                    </div>
                    <div className="down_button">
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
                </div>
                <div className="conversation">
                    {Conversation.map((val, ind) => {
        return (
          <div key={ind} className={val.character}>
            <div className="img" {...fadeInImage[ind]}></div>
            <p {...fadeInText[ind]}>{val.line}</p>
         </div>   
        );
      })}
                </div>
                <div className="scene">
                    <div className="scene_bg2_1" {...fadeInImage[8]}></div>
                    <div className="scene_bg2_2" {...fadeInImage[9]}></div>
                    <div className="scene_text">
                        뱀신은 육도의 문에 봉인되어 있던 여섯 악신에게 자유를 주었고,<br>
                        </br>
                        인세가 아비규환에 빠졌던 그 때, 그가 나타났습니다.
                    </div>
                </div>
                <div className="video">
                <video type="video/mp4" src="assets/story/cg.mp4" controls="controls" ref={videoRef}></video>
                </div>

		</section>
        )
    
}

export default Story;