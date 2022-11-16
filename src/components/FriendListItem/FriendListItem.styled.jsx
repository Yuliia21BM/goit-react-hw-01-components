import styled from 'styled-components';

export const FriendsItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 10px;
`;
export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    return isOnline === true ? 'green' : 'red';
  }};
`;
export const FriendPhoto = styled.img`
  width: 60px;
`;
export const FriendName = styled.p`
  font-size: 20px;
  font-style: italic;
`;
