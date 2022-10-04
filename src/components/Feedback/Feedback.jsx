import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

class Feedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    let procentGood = 0 ;
    total === 0 ? procentGood = 0 : procentGood = Math.round((this.state.good / total) * 100);
    return procentGood;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const procentGoodFeedback = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.section}>
        <h2 className={css.section__title}>Пожалуйста, оставьте отзыв</h2>
        <ul className={css.section__buttonList}>
          <li className={css.section__buttonListItem}>
            <button className={css.section__button}>Good</button>
          </li>
          <li className={css.section__buttonListItem}>
            <button className={css.section__button}>Neutral</button>
          </li>
          <li className={css.section__buttonListItem}>
            <button className={css.section__button}>Bad</button>
          </li>
        </ul>
        <h2 className={css.section__title}>Statistics</h2>
        <ul>
          <li className={css.section__listItem}>Good: {good}</li>
          <li className={css.section__listItem}>Neutral: {neutral}</li>
          <li className={css.section__listItem}>Bad: {bad}</li>
          <li className={css.section__listItem}>Total: {totalFeedback}</li>
          <li className={css.section__listItem}>
            Positive feedback: {procentGoodFeedback}%
          </li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
