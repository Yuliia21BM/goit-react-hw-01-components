import styled from 'styled-components';

export const StatTitle = styled.h2`
  font-style: italic;
  color: ${p => p.theme.colors.secondaryTitle};
  font-size: 35px;
  margin-bottom: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

export const StatItem = styled.li`
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.textDark};
  padding: 10px 50px;
`;

export const StatLabel = styled.p`
  font-style: italic;
  margin-bottom: 5px;
`;

export const StatsPercentage = styled.p`
  font-size: 20px;
`;
