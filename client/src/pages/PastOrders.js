import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Order from '../components/Order';
import { AUTH_TOKEN } from '../constants';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PAST_ORDERS_QUERY = gql`
  query PastOrdersQuery($limit: Int!, $index: Int!) {
    pastOrders(limit: $limit, index: $index) {
      uid
      orderDate
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

  return (
    <section className="relative">
      <div className="container flex flex-col lg:flex-row flex-wrap items-center gap-12 mt-14 lg:mt-28">
        {loading && `Loading...`}
        {data &&
          data.pastOrders.map((order) => {
            return (
              <>
                <Link to={`/pastOrders/${order.uid}`}>{order.orderDate}</Link>
              </>
            );
          })}
      </div>
    </section>
  );
};

export default PastOrders;
