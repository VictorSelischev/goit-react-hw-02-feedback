// import { Component } from 'react';
import css from './Section.module.css';

const Section = ({title, children}) => {
  return (
    <div className={css.section}>
      <h2 className={css.section__title}>{title}</h2>
      {children}
    </div>
  );
};
// class Section extends Component {
//   render() {
//     (<div className={css.section}>
//       <h2 className={css.section__title}>{title}</h2>
//       {children}
//     </div>);
//   }
// }

export { Section };
