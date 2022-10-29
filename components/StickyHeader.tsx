import { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';

const HeaderLayout = styled.header`
  position: sticky;
  top: -1px;

  width: 100%;
  height: 80px;
  background-color: #ec0047;

  &.is-pinned {
    box-shadow: 0 2px 10px 0 rgb(0 0 0 / 57%);
  }
`;

const StickyHeader = () => {
  const headerRef = useRef<HTMLElement>(null);
  const handleScroll: IntersectionObserverCallback = useCallback(([entry]: IntersectionObserverEntry[]) => {
    const { current } = headerRef;

    if (current) {
      current.classList.toggle('is-pinned', entry.intersectionRatio < 1);
    }
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = headerRef;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 1 });
      observer.observe(current);
    }
  }, [handleScroll]);

  return <HeaderLayout ref={headerRef}></HeaderLayout>;
};

export default StickyHeader;
