import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.section__buttonList}>
      {options.map((option, index) => (
        <li key={index} className={css.section__buttonListItem}>
          <button className={css.section__button}>{option.toUpperCase()}</button>
        </li>
      ))}
    </ul>
  );
};

export { FeedbackOptions };
