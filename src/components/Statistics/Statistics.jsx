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
    <Box
      mt="40px"
      textAlign="center"
      display="flex"
      flexDirection="column"
      width="300px"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
      ml="auto"
      mr="auto"
    >
      {title && <StatTitle>{title}</StatTitle>}

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
  stats: PropTypes.array.isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
