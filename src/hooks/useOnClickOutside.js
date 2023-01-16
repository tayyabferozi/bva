import { useEffect } from "react";

const useOnClickOutside = (ref, handler, ref2) => {
  useEffect(() => {
    const listener = (event) => {
      const el = ref?.current;
      if (
        !el ||
        el.contains(event?.target || null) ||
        ref2?.current === event?.target
      ) {
        return;
      }

      handler(event); // Call the handler only if the click is outside of the element passed.
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, ref2]); // Reload only if ref or handler changes
};

export default useOnClickOutside;
