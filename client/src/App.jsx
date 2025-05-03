import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';
import HotelReg from './components/HotelReg';
import Layout from './pages/Hotelowner/Layout';
import Dashboard from './pages/Hotelowner/Dashborad';
import AddRoom from './pages/Hotelowner/AddRoom';
import ListRoom from './pages/Hotelowner/ListRoom';

const App = () => {
  const isOwnerPath = useLocation().pathname.includes('/owner');

  return (
    <div>
      {/* Only show Navbar and Footer on non-owner pages */}
      {!isOwnerPath && <Navbar />}

      <div className='min-h-[70vh]'>
        <Routes>
          {/* Public/User Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<AllRooms />} />
          <Route path='/rooms/:id' element={<RoomDetails />} />
          <Route path='/my-bookings' element={<MyBookings />} />

          {/* Owner Dashboard Routes */}
          <Route path='/owner' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='add-room' element={<AddRoom />} />
            <Route path='list-room' element={<ListRoom />} />
          </Route>
        </Routes>
      </div>

      {/* Only show Footer on non-owner pages */}
      {!isOwnerPath && <Footer />}
    </div>
  );
};

export default App;
