import React from "react";

const roomData = [
  {
    name: "Double Bed",
    facility: "Room Service, Mountain View, Pool Access",
    price: 399,
    active: true,
  },
  {
    name: "Double Bed",
    facility: "Room Service, Mountain View, Pool Access",
    price: 299,
    active: true,
  },
  {
    name: "Double Bed",
    facility: "Free WiFi, Free Breakfast, Room Service",
    price: 249,
    active: true,
  },
  {
    name: "Single Bed",
    facility: "Free WiFi, Room Service, Pool Access",
    price: 199,
    active: true,
  },
];

const ListRoom = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r">
        <nav className="p-4 space-y-4">
          <div className="text-xl font-semibold">Dashboard</div>
          <ul className="space-y-2 text-gray-700">
            <li className="hover:text-blue-500 cursor-pointer">Add Room</li>
            <li className="text-blue-600 font-medium">List Room</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-2">Room Listings</h1>
        <p className="text-gray-600 mb-6">
          View, edit, or manage all listed rooms. Keep this information up-to-date to provide the best experience for users.
        </p>

        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="p-4">Name</th>
                <th className="p-4">Facility</th>
                <th className="p-4">Price / night</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {roomData.map((room, idx) => (
                <tr key={idx} className="border-t hover:bg-gray-50">
                  <td className="p-4">{room.name}</td>
                  <td className="p-4">{room.facility}</td>
                  <td className="p-4">${room.price}</td>
                  <td className="p-4">
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={room.active} className="sr-only peer" readOnly />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-500 transition-all"></div>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ListRoom;
