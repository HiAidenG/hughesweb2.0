import React, { useState, useEffect, useRef } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import styles from '../styles/DownArrow.module.css';

export const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);
  const prevScrollY = useRef(0);

  const checkScrollTop = () => {
    const currentScrollY = window.pageYOffset;
    const isScrollingUp = prevScrollY.current > currentScrollY;

    if (!showScroll && isScrollingUp && currentScrollY > 0) {
      setShowScroll(true);
    } else if (showScroll && (currentScrollY <= 0 || !isScrollingUp)) {
      setShowScroll(false);
    }

    prevScrollY.current = currentScrollY;
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  return (
    <FaArrowCircleUp
      className={styles.scrollTop}
      onClick={scrollTop}
      size={50}
      style={{ display: showScroll ? 'flex' : 'none' }}
    />
  );
};




 
        




