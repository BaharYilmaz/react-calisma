import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../_redux/userActions";
import UserCard from "./UserCard";

const UserList = ({ navigate }) => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => ({
    users: state.users.entities,
    loading: state.users.loading,
  }));

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const openUserProfile = (userId) => {
    navigate(`/users/${userId}/detail`);
  };

  return (
    <>
      {loading &&
        <div style={{height: "4px"}} className="progress progress-bar progress-bar-striped progress-bar-animated bg-info" />
      }
      <div className="row">
        {users?.map((user) =>
          <div className="col-sm-1 col-md-4 col-lg-3 my-2" key={user.id}>
            <UserCard user={user} openUserProfile={openUserProfile} />
          </div>
        )}
      </div>
    </>
  );
};

export default UserList;