import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul>
        <li className={css.section__listItem}>Good: {good}</li>
        <li className={css.section__listItem}>Neutral: {neutral}</li>
        <li className={css.section__listItem}>Bad: {bad}</li>
        <li className={css.section__listItem}>Total: {total}</li>
        <li className={css.section__listItem}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    </>
  );
};

// class Statistics extends Component {
//   render() {
//     return (
//       <>
//         <h2 className={css.section__title}>Statistics</h2>
//         <ul>
//           <li className={css.section__listItem}>Good: {good}</li>
//           <li className={css.section__listItem}>Neutral: {neutral}</li>
//           <li className={css.section__listItem}>Bad: {bad}</li>
//           <li className={css.section__listItem}>Total: {totalFeedback}</li>
//           <li className={css.section__listItem}>
//             Positive feedback: {procentGoodFeedback}%
//           </li>
//         </ul>
//       </>
//     );
//   }
// }

export { Statistics };
