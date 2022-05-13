import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

const RESTAURANTS_QUERY = gql`
  query RestaurantQuery($delivery: Boolean!, $limit: Int!, $index: Int!) {
    restaurants(delivery: $delivery, limit: $limit, index: $index) {
      name
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
    <>
      {data &&
        data.restaurants.map((restaurant) => {
          return (
            <>
              {restaurant.name}
              <br />
            </>
          );
        })}
    </>
  );
};

export default Restaurants;
