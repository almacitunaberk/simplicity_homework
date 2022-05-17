import React from 'react';
import { useQuery, gql } from '@apollo/client';
import './Restaurants.css';

const RESTAURANTS_QUERY = gql`
  query RestaurantQuery($delivery: Boolean!, $limit: Int!, $index: Int!) {
    restaurants(delivery: $delivery, limit: $limit, index: $index) {
      name
      open
      avgScore
      minOrderAmount
      uid
      deliveryFee {
        amount
      }
    }
  }
`;

const Restaurants = () => {
  const { data, loading, error } = useQuery(RESTAURANTS_QUERY, {
    variables: {
      delivery: false,
      limit: 100,
      index: 1,
    },
  });
  return (
    <section className="restaurants">
      <div className="restaurants__container">
        {loading && <h2>Loading...</h2>}
        {data && (
          <>
            <h2>Restaurants</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Average Score</th>
                  <th>Delivery Fee</th>
                  <th>Min. Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.restaurants.map((restaurant) => {
                  return (
                    <tr key={restaurant.uid}>
                      <td>{restaurant.name}</td>
                      <td>{restaurant.avgScore}</td>
                      <td>{restaurant.deliveryFee === null ? `0` : restaurant.deliveryFee.amount}</td>
                      <td>{restaurant.minOrderAmount}</td>
                      <td>{restaurant.open ? `Open` : `Closed`}</td>
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

export default Restaurants;
