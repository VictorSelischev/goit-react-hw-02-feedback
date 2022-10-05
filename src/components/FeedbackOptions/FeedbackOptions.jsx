import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.section__buttonList}>
      {options.map(option => (
        <li key={option} className={css.section__buttonListItem}>
          <button className={css.section__button} onClick={onLeaveFeedback} >{option.toUpperCase()}</button>
        </li>
      ))}
    </ul>
  );
};

export { FeedbackOptions };
