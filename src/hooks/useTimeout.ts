import { useEffect, useRef } from "react";

export const useTimeout = (callback: () => void, delay: number) => {
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const timer = setTimeout(() => savedCallback.current(), delay);
    return () => clearTimeout(timer);
  }, [delay]);
};

export default useTimeout;
