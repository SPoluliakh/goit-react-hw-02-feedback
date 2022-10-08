import React, { Component } from 'react';
import StatisticsList from '../Statistic';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedbackByClick = evt => {
    const selectedButton = evt.currentTarget.innerText;
    this.setState(prevState => ({
      [selectedButton]: prevState[selectedButton] + 1,
    }));
  };

  countTotalFeedback = () => {
    const fedbackValues = Object.values(this.state);

    const totalFeedback = fedbackValues.reduce(
      (acc, feedback) => acc + feedback,
      0
    );
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = callback => {
    const posotiveFeedback = ((this.state.good / callback()) * 100).toFixed(0);
    return posotiveFeedback;
  };

  render() {
    const feedbackVariants = Object.keys(this.state);

    return (
      <div>
        <h2>Plese leave feedback</h2>
        {feedbackVariants.map(key => (
          <button key={key} onClick={this.leaveFeedbackByClick}>
            {key}
          </button>
        ))}
        <StatisticsList
          state={this.state}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}
