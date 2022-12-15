import React, { Component } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import { Box } from '../../Box';
import { StatTitle, StatText } from './App.styled';
import Statistics from '../Statistic';

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

  countPositiveFeedbackPercentage = () => {
    const posotiveFeedback = Math.ceil(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return posotiveFeedback || 0;
  };

  render() {
    const feedbackVariants = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    return (
      <Box
        border="normal"
        padding={3}
        marginLeft="auto"
        marginRight="auto"
        marginTop={6}
        display="flex"
        flexDirection="column"
        width="300px"
      >
        <Section title="Plese leave feedback">
          <FeedbackOptions
            options={feedbackVariants}
            onKlick={this.leaveFeedbackByClick}
          />
        </Section>
        <StatTitle>Statistics</StatTitle>
        <Section>
          {totalFeedback === 0 ? (
            <StatText>"There is no feedback"</StatText>
          ) : (
            <Statistics
              options={this.state}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Box>
    );
  }
}
