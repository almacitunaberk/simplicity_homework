import React from 'react';
import { useQuery, gql } from '@apollo/client';
import './UserInfo.css';

const USER_QUERY = gql`
  query UserQuery {
    user {
      email
      firstName
      lastName
      mobileNumber
      uid
      profilePicture {
        url
      }
    }
  }
`;

const UserInfo = () => {
  const { data, loading, error } = useQuery(USER_QUERY);

  return (
    <>
      {data && (
        <div className="userInfo__container">
          <article className="email__container">
            <h3>{data.user.email}</h3>
          </article>
          <article className="firstName__container">
            <h3>{data.user.firstName}</h3>
          </article>
          <article className="lastName__container">
            <h3>{data.user.lastName}</h3>
          </article>
          <article className="mobileNumber__container">
            <h3>{data.user.mobileNumber}</h3>
          </article>
        </div>
      )}
    </>
  );
};

export default UserInfo;
