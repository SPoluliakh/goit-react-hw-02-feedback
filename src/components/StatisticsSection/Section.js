import PropTypes from 'prop-types';
import Statistics from '../Statistic';
import FeedbackOptions from '../FeedbackButtons';
import { Box } from '../../Box';

import { StatisticSectionTitle, TitleStatistic } from './Section.styled';

const Section = ({ title, options, onKlick, total, positivePercentage }) => {
  return (
    <Box as="section" padding={3}>
      <StatisticSectionTitle>{title}</StatisticSectionTitle>
      <FeedbackOptions options={options} onKlick={onKlick} />
      <TitleStatistic>Statistics</TitleStatistic>
      {total() === 0 ? (
        <p>"There is no feedback"</p>
      ) : (
        <Statistics
          options={options}
          total={total}
          positivePercentage={positivePercentage}
        />
      )}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
