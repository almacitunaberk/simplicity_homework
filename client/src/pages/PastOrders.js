import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Order from '../components/Order';
import { AUTH_TOKEN } from '../constants';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PAST_ORDERS_QUERY = gql`
  query PastOrdersQuery($limit: Int!, $index: Int!) {
    pastOrders(limit: $limit, index: $index) {
      uid
    }
  }
`;

const PastOrders = () => {
  const { data, loading, error } = useQuery(PAST_ORDERS_QUERY, {
    variables: {
      limit: 100,
      index: 1,
    },
  });
  console.log(data);
  return (
    <div>
      {data.pastOrders.map((order) => {
        return (
          <>
            {order.uid}
            <br />
          </>
        );
      })}
    </div>
  );
};

export default PastOrders;
