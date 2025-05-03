import React, { useState } from 'react';
import Title from '../../components/Title';
import { assets } from '../../assets/assets';

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      'Free Wifi': false,
      'Free Breakfast': false,
      'Free Service': false,
      'Free View': false,
      'Mountain View': false,
      'Pool Access': false,
    },
  });

  return (
    <form className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <Title
        align="left"
        font="Outfit"
        title="Add Room"
        subTitle="Fill in the details carefully and accurately — room details, pricing, and amenities enhance the user booking experience."
      />

      {/* Upload area for images */}
      <p className="text-gray-800 mt-10 font-medium">Images</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-4">
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key} className="cursor-pointer">
            <img
              className="h-28 w-full object-cover rounded-md border border-gray-300 hover:opacity-80 transition"
              src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea}
              alt={`Room Upload ${key}`}
            />
            <input
              type="file"
              accept="image/*"
              id={`roomImage${key}`}
              hidden
              onChange={(e) => setImages({ ...images, [key]: e.target.files[0] })}
            />
          </label>
        ))}
      </div>

      {/* Room Type & Price */}
      <div className="w-full flex flex-col sm:flex-row sm:gap-4 mt-4">
        {/* Room Type */}
        <div className="flex-1 max-w-64">
          <p className="text-gray-800 mt-4">Room Type</p>
          <select
            value={inputs.roomType}
            onChange={(e) => setInputs({ ...inputs, roomType: e.target.value })}
            className="border opacity-70 border-gray-300 mt-1 rounded p-2 w-full"
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>

        {/* Price */}
        <div className="flex-1 max-w-64">
          <p className="mt-4 text-gray-800">
            Price <span className="text-xs">/night</span>
          </p>
          <input
            type="number"
            name="pricePerNight"
            placeholder="0"
            className="border border-gray-300 mt-1 rounded p-2 w-full"
            value={inputs.pricePerNight}
            onChange={(e) =>
              setInputs({ ...inputs, pricePerNight: e.target.value })
            }
          />
        </div>
      </div>

      {/* Amenities */}
      <p className="text-gray-800 mt-6 font-medium">Amenities</p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-2 text-gray-700 max-w-sm">
        {Object.keys(inputs.amenities).map((amenity, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={`amenities${index + 1}`}
              checked={inputs.amenities[amenity]}
              onChange={() =>
                setInputs({
                  ...inputs,
                  amenities: {
                    ...inputs.amenities,
                    [amenity]: !inputs.amenities[amenity],
                  },
                })
              }
              className="accent-primary"
            />
            <label htmlFor={`amenities${index + 1}`} className="text-sm">
              {amenity}
            </label>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-700 text-white px-8 py-2 rounded mt-8 hover:bg-opacity-90 transition"
      >
        Add Room
      </button>
    </form>
  );
};

export default AddRoom;
