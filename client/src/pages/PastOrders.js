import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Order from '../components/Order';
import { AUTH_TOKEN } from '../constants';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './PastOrders.css';

const PAST_ORDERS_QUERY = gql`
  query PastOrdersQuery($limit: Int!, $index: Int!) {
    pastOrders(limit: $limit, index: $index) {
      uid
      orderDate
      deliveryFee
      total
      restaurant {
        name
      }
    }
  }
`;

const PastOrders = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(PAST_ORDERS_QUERY, {
    variables: {
      limit: 100,
      index: 1,
    },
  });

  const toOrder = (uid) => {
    navigate(`/pastOrders/${uid}`);
  };

  return (
    <section className="orders_table">
      <div className="orders_table__container">
        {loading && <h2>Loading</h2>}
        {data && (
          <>
            <h2>Recent Orders</h2>
            <table>
              <thead>
                <tr>
                  <th>Order Date</th>
                  <th>Delivery Fee</th>
                  <th>Total</th>
                  <th>Restaurant Name</th>
                </tr>
              </thead>
              <tbody>
                {data.pastOrders.map((order) => {
                  return (
                    <tr onClick={() => toOrder(order.uid)} key={order.uid}>
                      <td>{moment(order.orderDate).format('MMMM Do YYYY')}</td>
                      <td>{order.deliveryFee}</td>
                      <td>{order.total}</td>
                      <td>{order.restaurant.name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </section>
  );
};

export default PastOrders;
