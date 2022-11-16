import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
export const Description = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
export const UserPhoto = styled.img`
  width: 200px;
  margin-bottom: 10px;
`;
export const UserName = styled.p`
  color: ${p => p.theme.colors.textDark};
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: ${p => p.theme.fontWeights.normal};
`;
export const UserTag = styled.p`
  color: var(--black);
  margin-bottom: 10px;
  font-style: italic;
`;
export const UserLocation = styled.p`
  color: ${p => p.theme.colors.textDark};
  margin-bottom: 10px;
  font-size: 14px;
`;
export const StatsList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
`;
export const StatsItem = styled.li`
  color: ${p => p.theme.colors.textDark};
  margin-bottom: 10px;
  width: 100%;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.textDark};
  margin-bottom: 10px;
  padding: 5px;
`;
export const StatsLabel = styled.p`
  color: ${p => p.theme.colors.textDark};
  padding: 5px;
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.normal};
`;
export const StatsQuantity = styled.p`
  color: ${p => p.theme.colors.textDark};
  padding: 5px;
  text-align: center;
  font-style: italic;
`;
