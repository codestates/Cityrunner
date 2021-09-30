import { useRef, useEffect, useCallback } from 'react';

const useScrollCount = (end, start = 0, duration = 3000, delay = 0, num = 1) => {
  const element = useRef();
  const observer = useRef(null);
  const stepTime = Math.abs(Math.floor(duration / (end - start)));

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        let currentNumber = start;
        const counter = setInterval(() => {
          currentNumber += ((num !== 1)? Math.floor(Math.random() * num) : 1);
          current.innerHTML = currentNumber;
          if (currentNumber >= end) {
            clearInterval(counter);
            current.innerHTML = end;
            observer.current.disconnect(element.current);
          }
        }, stepTime);
      }
    },
    [end, start, stepTime, element],
  );

  useEffect(() => {
    if (element.current) {
      observer.current = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.current.observe(element.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
  };
};

export default useScrollCount;