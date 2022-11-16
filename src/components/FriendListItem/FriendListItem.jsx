import PropTypes from 'prop-types';

import {
  FriendsItem,
  Status,
  FriendPhoto,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <Status isOnline={isOnline}></Status>
      <FriendPhoto src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendsItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
