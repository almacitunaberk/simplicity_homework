import React from 'react';
import { useQuery, gql } from '@apollo/client';

const USER_QUERY = gql`
  query UserQuery {
    user {
      email
    }
  }
`;

const UserInfo = () => {
  const { data, loading, error } = useQuery(USER_QUERY);

  return <>{data && <h1>{data.user.email}</h1>}</>;
};

export default UserInfo;
