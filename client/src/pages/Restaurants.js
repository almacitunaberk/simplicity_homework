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
    <section className="relative">
      <div className="container justify-center flex flex-col lg:flex-row flex-wrap items-stretch lg:gap-24 sm:gap-12 mt-14 lg:mt-28">
        {loading && `Loading...`}
        {data &&
          data.restaurants.map((restaurant) => {
            return (
              <div className="flex flex-1 flex-col items-center justify-center bg-bookmark-purple rounded-md px-3 py-4 text-center text-white mb-6">
                {restaurant.name}
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Restaurants;
