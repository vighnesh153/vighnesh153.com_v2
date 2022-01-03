/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import { useState, useEffect } from 'react';

export enum ScrollDirection {
  Up = 'up',
  Down = 'down',
}

interface UseScrollDirectionProps {
  initialDirection?: ScrollDirection;
  thresholdPixels?: number;
}

const useScrollDirection = ({
  initialDirection = ScrollDirection.Down,
  thresholdPixels = 0,
}: UseScrollDirectionProps = {}) => {
  const [scrollDirection, setScrollDirection] = useState(initialDirection);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDirection = () => {
      ticking = false;
      const currentScrollY = window.pageYOffset;
      const scrollAmount = currentScrollY - lastScrollY;

      // We haven't exceeded the threshold
      if (Math.abs(scrollAmount) < thresholdPixels) {
        return;
      }

      setScrollDirection(
        scrollAmount > 0 ? ScrollDirection.Down : ScrollDirection.Up
      );
      lastScrollY = Math.max(currentScrollY, 0);
    };

    const onScroll = () => {
      if (ticking === false) {
        ticking = true;
        window.requestAnimationFrame(updateScrollDirection);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [initialDirection, thresholdPixels]);

  return scrollDirection;
};

export default useScrollDirection;
