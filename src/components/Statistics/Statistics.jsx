import PropTypes from 'prop-types';
import {
  StatList,
  StatItem,
  StatLabel,
  StatsPercentage,
  StatTitle,
} from './Statistics.styled';
import { Box } from '../Box';

export const Statistics = ({ title, stats }) => {
  return (
    <Box mt="40px" textAlign="center" display="flex" flexDirection="column">
      <StatTitle>{title}</StatTitle>

      <StatList>
        {stats.map(item => (
          <StatItem
            key={item.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <StatLabel>{item.label}</StatLabel>
            <StatsPercentage>{item.percentage}%</StatsPercentage>
          </StatItem>
        ))}
      </StatList>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
