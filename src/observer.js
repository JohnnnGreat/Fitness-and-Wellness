import { useState, useEffect } from "react";

export default function useObserver(element) {
  const [isIntersect, setIsIntersect] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersect(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    console.log(element);
    observer.observe(element && element);
  }); // Empty dependency array to run only once

  return isIntersect;
}
