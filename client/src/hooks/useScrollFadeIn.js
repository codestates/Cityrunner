import { useCallback, useRef } from "react"

const useScrollFadeIn = () => {
  const element = useRef();

  const handleScroll = useCallback(() => {
    const { current } = element;
    const currentScrollPosition = window.pageYOffset;
    const currentDomScrollPosition = currentScrollPosition + current.getBoundingClientRect().top - 800;
    // 800은 이벤트 반응 시점을 조절하기 위해 넣은 임의의 Y position 값
  }, []);

  return {
    ref : element
  };
};

export default useScrollFadeIn;