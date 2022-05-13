import Login from './pages/Login';
import PastOrders from './pages/PastOrders';
import ProtectedRoute from './components/ProtectedRoute';
import Order from './components/Order';
import Restaurants from './pages/Restaurants';
import UserInfo from './pages/UserInfo';
import './App.css';
import { Routes, Route } from 'react-router';
import { AUTH_TOKEN } from './constants';

function App() {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const isAuth = authToken !== null;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route
          path="/pastOrders"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <PastOrders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pastOrders/:id"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Order />
            </ProtectedRoute>
          }
        />
        <Route
          path="/restaurants"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Restaurants />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userInfo"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <UserInfo />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
