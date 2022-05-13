import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useLocation } from 'react-router-dom';

const ORDER_QUERY = gql`
  query OrderQuery($orderUid: String!) {
    order(orderUid: $orderUid) {
      uid
    }
  }
`;

const Order = () => {
  const location = useLocation();
  const orderId = location.pathname.split('/')[2];
  return <div>Order</div>;
};

export default Order;
