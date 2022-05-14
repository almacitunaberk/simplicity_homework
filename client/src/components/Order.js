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
    <div className="text-3xl md:text-4 lg:text-5xl text-center text-bookmark-blue lg:text-left px-3">
      {loading && `Loading...`}
      {data && <div>{data.order.deliveryFee}</div>}
    </div>
  );
};

export default Order;
