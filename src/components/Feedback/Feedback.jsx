import React, { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    console.log(css);
    return (
      <div className={css.section}>
        <h2 className={css.section__title}>Пожалуйста, оставьте отзыв</h2>
        <ul className={css.section__buttonList}>
          <li className={css.section__buttonListItem}>
            <button>Good</button>
          </li>
          <li className={css.section__buttonListItem}>
            <button>Neutral</button>
          </li>
          <li className={css.section__buttonListItem}>
            <button>Bad</button>
          </li>
        </ul>
        <h2 className={css.section__title}>Statistics</h2>
        <ul>
          <li className={css.section__listItem}>Good: 3</li>
          <li className={css.section__listItem}>Neutral: 2</li>
          <li className={css.section__listItem}>Bad: 2</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
