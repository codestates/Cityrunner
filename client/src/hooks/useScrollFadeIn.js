import { useCallback, useEffect, useRef } from "react"

const useScrollFadeIn = (dir = 'up', duration = 1, delay = 0) => {
  const element = useRef();

  const handleDirection = (dir) => {
    switch (dir) {
      case 'up':
        return 'translate3d(0, 50%, 0)';
      case 'down':
        return 'translate3d(0, -50%, 0)';
      case 'left':
        return 'translate3d(50%, 0, 0)';
      case 'right':
        return 'translate3d(-50%, 0, 0)';
      default:
        return;
    }
  };

  const handleScroll = useCallback(([entry]) => {
    const { current } = element;
      if (entry.isIntersecting) {
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = 'translate3d(0, 0, 0)';
      }
    }, [delay, duration]);

  useEffect(() => {
    let observer;

    if (element.current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.15 });
      observer.observe(element.current);
    }

    return (() => observer && observer.disconnect());
  }, [handleScroll]);

  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection(dir) },
  };
};

export default useScrollFadeIn;