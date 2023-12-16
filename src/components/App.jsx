import React, { useState } from 'react';
import css from './App.module.css';

import { Feedback } from './Feetback/feetback';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistic } from './Statistic/Statistic';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedback.good / countTotalFeedback()) * 100);
  };

  const handleIncrement = event => {
    event.preventDefault();
    const name = event.target.name;
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: prevFeedback[name] + 1,
    }));
  };

  const totalFeedback = countTotalFeedback();

  return (
    <section className={css.wrapper}>
      <Section title="Please save feedback">
        <Feedback
          options={Object.keys(feedback)}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      {totalFeedback ? (
        <Section title="Statistic">
          <Statistic
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </section>
  );
};
