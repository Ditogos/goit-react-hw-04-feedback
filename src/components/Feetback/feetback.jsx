import PropTypes from 'prop-types';
import css from './feetback.module.css';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttons}>
      {options.map(option => (
        <li key={option}>
          <button
            type="button"
            name={option}
            className={css.button}
            onClick={evt => onLeaveFeedback(evt)}
          >
            {option}
          </button>
        </li>
      ))}
    </div>
  );
};

Feedback.propType = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
