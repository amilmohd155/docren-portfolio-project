import { useEffect, useState } from "react";

const useScrolledTillBottom = () => {
  const [isBottom, setIsBottom] = useState(false);
  const [hasReachedBottom, setHasReachedBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        const isAtBottom =
          Math.ceil(window.innerHeight + window.scrollY) >=
          document.documentElement.scrollHeight;

        if (isAtBottom && !hasReachedBottom) {
          setIsBottom(true);
          setHasReachedBottom(true);
        } else if (!isAtBottom && hasReachedBottom) {
          setIsBottom(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasReachedBottom]);

  return { isBottom, hasReachedBottom };
};

export default useScrolledTillBottom;
