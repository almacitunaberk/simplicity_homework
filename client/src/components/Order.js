import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useLocation } from 'react-router-dom';

const ORDER_QUERY = gql`
  query OrderQuery($orderUid: String!) {
    order(orderUid: $orderUid) {
      deliveryFee
    }
  }
`;

const Order = () => {
  const location = useLocation();
  const orderId = location.pathname.split('/')[2];
  const { data, loading, error } = useQuery(ORDER_QUERY, {
    variables: {
      orderUid: orderId,
    },
  });
  return (
    <div>
      {loading && `Loading...`}
      {data && data.order.deliveryFee}
    </div>
  );
};

export default Order;
