'use client';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './scroll-arrow.module.css';

export default function ScrollArrow(props: { id: string }) {
  function scrollToElement() {
    const element = document.getElementById(props.id);
    element?.scrollIntoView();
  }

  return (
    <span className={styles.container} onClick={scrollToElement}>
      Projects
      <div className={styles.arrow}>
        <FontAwesomeIcon icon={faArrowDown} />
      </div>
    </span>
  );
}
