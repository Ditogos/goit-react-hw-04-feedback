import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.List}>
      <li className={css.Item}>Good: {good}</li>
      <li className={css.Item}>Neutral: {neutral}</li>
      <li className={css.Item}>Bad: {bad}</li>
      <li className={css.Item}>Total: {total}</li>
      <li className={css.Item}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
