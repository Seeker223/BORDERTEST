import { useCallback, useEffect, useRef } from 'react';

export function useOffrolling({ rightItems, topItems, onCycle }) {
  const timeoutRef = useRef(null);

  const runCycle = useCallback(() => {
    if (!rightItems.length || !topItems.length) return;

    const rightHead = rightItems[0];
    const topHead = topItems[0];

    onCycle({ rightHead, topHead });
  }, [onCycle, rightItems, topItems]);

  const onScroll = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(runCycle, 250);
  }, [runCycle]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return { onScroll, runCycle };
}
