import React from 'react';

const PastOrders = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    // TODO: Fetch past orders of the current user using the token in the localstorage
    //        update the order list with the past orders fetched from the backend
  }, []);

  return (
    <div>
      <h1>Past Orders</h1>
    </div>
  );
};

export default PastOrders;
