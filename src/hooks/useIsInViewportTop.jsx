import { useState } from "react";
import { useEffect } from "react";

export default function useIsInViewportTop(ref) {
  const [isInViewPortTop, setIsInViewportTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const { bottom } = ref.current.getBoundingClientRect();
      console.log(bottom);
      return setIsInViewportTop(window.innerHeight - bottom > -3500);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, isInViewPortTop]);
  return isInViewPortTop;
}
