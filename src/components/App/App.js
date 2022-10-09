import React, { Component } from 'react';
import Section from '../StatisticsSection';

// import Statistics from '../Statistic';
// import FeedbackOptions from '../FeedbackButtons';
// import { Box } from '../../Box';

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
    return (
      <Section
        title="Plese leave feedback"
        options={this.state}
        onKlick={this.leaveFeedbackByClick}
        total={this.countTotalFeedback}
        positivePercentage={this.countPositiveFeedbackPercentage}
      />

      // <Box as="section" padding={3}>
      //   <h2>Plese leave feedback</h2>
      //   <FeedbackOptions
      //     options={this.state}
      //     onKlick={this.leaveFeedbackByClick}
      //   />
      //   <h3>Statistics</h3>
      //   {this.countTotalFeedback() === 0 ? (
      //     <p>"There is no feedback"</p>
      //   ) : (
      //     <Statistics
      //       options={this.state}
      //       total={this.countTotalFeedback}
      //       positivePercentage={this.countPositiveFeedbackPercentage}
      //     />
      //   )}
      // </Box>
    );
  }
}
