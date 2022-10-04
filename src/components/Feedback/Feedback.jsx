import React, { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <h2 className={css.section__title}>Пожалуйста, оставьте отзыв</h2>
        <ul className={css.section__buttonList, css.list}>
          <li>
            <button>Good</button>
          </li>
          <li>
            <button>Neutral</button>
          </li>
          <li>
            <button>Bad</button>
          </li>
        </ul>
        <h2 className={css.section__title}>Statistics</h2>
        <ul>
          <li>Good: 3</li>
          <li>Neutral: 2</li>
          <li>Bad: 2</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
