import PropTypes from 'prop-types';
import Section from '../Section';
import Statistics from '../Statistic';

import { StatText } from './StatisticSection.styled';

export const StatisticSection = ({
  countTotalFeedback,
  options,
  total,
  positivePercentage,
}) => {
  return (
    <Section>
      {countTotalFeedback === 0 ? (
        <StatText>"There is no feedback"</StatText>
      ) : (
        <Statistics
          options={options}
          total={total}
          positivePercentage={positivePercentage}
        />
      )}
    </Section>
  );
};

StatisticSection.propTypes = {
  countTotalFeedback: PropTypes.number,
  options: PropTypes.object,
  total: PropTypes.func,
  positivePercentage: PropTypes.number,
};
