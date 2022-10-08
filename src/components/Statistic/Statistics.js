import React from 'react';

const StatisticsList = ({ state, total, positivePercentage }) => {
  const feedbackVariants = Object.keys(state);
  return (
    <>
      <h3>Statistics</h3>
      <ul>
        {feedbackVariants.map(key => (
          <li key={key}>
            <p>
              {key}: {state[key]}
            </p>
          </li>
        ))}
        <li>Total: {total()}</li>
        <li>
          Positive feedback:
          {total() === 0 ? 0 : positivePercentage(total)}%
        </li>
      </ul>
    </>
  );
};

export default StatisticsList;
