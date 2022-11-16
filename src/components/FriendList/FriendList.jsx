import PropTypes from 'prop-types';
import { ListFrends } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ListFrends>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ListFrends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
