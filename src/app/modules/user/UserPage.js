import React from 'react';
import { Route, Routes, useNavigate } from "react-router";
import UserList from "./Users/UserList";
import UserDetail from "./UserDetail/UserDetail";

const UserPage = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<UserList navigate={navigate}/>} />
      <Route path="/:id/detail" element={<UserDetail navigate={navigate}/>} />
    </Routes>
  );
};

export default UserPage;
