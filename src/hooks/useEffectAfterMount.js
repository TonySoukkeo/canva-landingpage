import { useEffect, useRef } from "react";

const useEffectAfterMount = (cb, arrDeps) => {
  const componentIsMounting = useRef(true);

  useEffect(() => {
    if (componentIsMounting.current) {
      return cb();
    }

    componentIsMounting.current = false;
  }, [cb, arrDeps]);
};

export default useEffectAfterMount;
