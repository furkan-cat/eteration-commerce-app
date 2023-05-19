import { useEffect, useState } from "react";

export default function useTimeout() {
  const [isPending, setIsPending] = useState(false);
  let timeout = null;

  const timeoutFunction = (duration, callback) => {
    clearTimeout(timeout);
    setIsPending(true);
    timeout = setTimeout(() => {
      setIsPending(false);
      timeout = null;

      callback?.();
    }, duration);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return [isPending, timeoutFunction];
}
