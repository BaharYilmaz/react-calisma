import React from 'react';

const UserCard = ({ user, openUserProfile }) => {
  return (
    <div className="card pointer" onClick={() => openUserProfile(user.id)}>
      <div className="card-body">
        <img src={user.picture}
             alt="user"
             className="card-img rounded"
        />
        <div className="my-2">{user.firstName}{" "}{user.lastName}</div>
        <small>{user.title}{". "}{user.lastName}</small>
      </div>
    </div>
  );
};

export default UserCard;