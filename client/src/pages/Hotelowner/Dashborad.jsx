import React, { useState } from 'react';
import Title from '../../components/Title';
import { assets, dashboardDummyData } from '../../assets/assets';

const Dashboard = () => {
  const [dashboard] = useState(dashboardDummyData);

  const combinedBookings = [
    ...(dashboard.recentBookings || []),
    ...(dashboard.bookings || []),
  ];

  return (
    <div className="p-4 md:p-8 pb-20 min-h-screen bg-gray-50">
      {/* Dashboard Title */}
      <Title
        align="left"
        font="Outfit"
        title="Dashboard"
        subTitle="Monitor your room listings, track bookings, and analyze revenue — all in one place."
      />

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <img src={assets.totalBookingIcon} alt="Total Bookings" className="h-8 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">Total Bookings</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">{dashboard.totalBookings}</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <img src={assets.totalRevenueIcon} alt="Total Revenue" className="h-8 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">Total Revenue</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">₹{dashboard.totalRevenue}</p>
        </div>
      </div>

      {/* Recent Bookings */}
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Recent Bookings</h2>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-x-auto">
        <table className="w-full text-sm text-left min-w-[600px]">
          <thead className="bg-gray-100 text-gray-700 font-medium">
            <tr>
              <th className="py-3 px-4">User Name</th>
              <th className="py-3 px-4">Room Name</th>
              <th className="py-3 px-4">Total Amount</th>
              <th className="py-3 px-4">Payment Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {combinedBookings.map((booking, index) => (
              <tr key={index} className="border-t hover:bg-gray-50 transition">
                <td className="py-3 px-4">{booking.userName || booking.user?.username || '—'}</td>
                <td className="py-3 px-4">{booking.roomName || booking.room?.roomtype || '—'}</td>
                <td className="py-3 px-4">₹{booking.amount || booking.totalPrice || '0'}</td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${
                      booking.isPaid || booking.ispaid ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {booking.isPaid || booking.ispaid ? 'Paid' : 'Unpaid'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
