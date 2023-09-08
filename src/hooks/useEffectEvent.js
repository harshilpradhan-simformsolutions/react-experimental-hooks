import { useLayoutEffect, useRef } from 'react';

function useEffectEvent(cb) {
  const cbRef = useRef(cb);

  useLayoutEffect(() => {
    cbRef.current = cb;
  });

  return cbRef.current;
}

export { useEffectEvent };
