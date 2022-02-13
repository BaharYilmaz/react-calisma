import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserAddress from "./UserAddress";
import styles from "./UserDeatil.module.scss";
import { fetchUser } from "../_redux/userActions";
import { dateFormatter } from "../../../_helpers/dateFormatter";

const UserDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => ({
    user: state.users.userDetail,
    loading: state.users.loading,
  }));

  useEffect(() => {
    dispatch(fetchUser({ userId: params.id }));
  }, [params, dispatch]);

  return (
    <div className="row border p-3">
      <div className="col-lg-4">
        {loading ?
          <div className="imageLoader" /> :
          <img src={user?.picture}
               alt="user"
               className="rounded"
               width="100%"
          />
        }
      </div>
      <div className={`col-lg-4 mt-3 ${styles.userInfo}`}>
        <div>
          <h5>{user?.title}.{" "}{user?.firstName}{" "}{user?.lastName}</h5>
        </div>
        <div><span>Gender: </span>{user?.gender}</div>
        <div><span>Date of birth: </span>{dateFormatter(user?.dateOfBirth)}</div>
        <div><span>Register date: </span>{dateFormatter(user?.registerDate)}</div>
        <div className="mt-3"><span>Email: </span>{user?.email}</div>
        <div><span>Phone: </span>{user?.phone}</div>
      </div>
      <div className="col-lg-4 mt-3">
        <div><h5>Address</h5></div>
        {user &&
          <div>
            <span>{user?.location.street}{", "}</span>
            <span>{user?.location.state}{", "}</span>
            <span>{user?.location.city}{" / "}</span>
            <span>{user?.location.country}</span>
          </div>
        }
        <UserAddress location={user?.location}/>
      </div>
    </div>
  );
};

export default UserDetail;