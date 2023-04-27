import React, { useState, useEffect } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import styles from '../styles/DownArrow.module.css';

export const ScrollDownArrow = () => {
  const [showScroll, setShowScroll] = useState(true);

  const checkScrollTop = () => {
    if (showScroll && window.pageYOffset > 0) {
      setShowScroll(false);
    } else if (!showScroll && window.pageYOffset <= 0) {
      setShowScroll(true);
    }
  };

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  return (
    <FaArrowCircleDown
      className={styles.scrollDown}
      onClick={scrollDown}
      size={50}
      style={{ display: showScroll ? 'flex' : 'none' }}
    />
  );
};
