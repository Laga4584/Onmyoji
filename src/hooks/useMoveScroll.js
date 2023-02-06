import { useRef } from "react";

//hook
function useMoveScroll() {
    const element = useRef(null);
    const onMoveToElement = () => {
      //console.log(element.current);
      //element.current?.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top:
          window.scrollY+element.current?.getBoundingClientRect().top,
        behavior: "smooth",
      });
      
    };
    return { element, onMoveToElement};
  }
  
  export default useMoveScroll;