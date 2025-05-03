import React, { useState } from 'react';
import { assets } from '../assets/assets';

const HotelReg = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    city: '',
  });

  const cities = [
    'India',
    'Dubai',
    'Singapore',
    'London',
    'New York',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hotel Registered:', formData);
    onClose(); // Close modal after submission
  };

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black/70'>
      <form onSubmit={handleSubmit} className='flex bg-white rounded-xl max-w-4xl max-md:mx-2 w-full'>
        <img 
          src={assets.regImage} 
          alt="Registration Visual" 
          className='w-1/2 rounded-l-xl hidden md:block object-cover' 
        />

        <div className='relative flex flex-col md:w-1/2 p-8 md:p-10'>
          <button 
            type="button" 
            onClick={onClose} 
            className='absolute top-4 right-4 h-4 w-4 cursor-pointer'
          >
            <img src={assets.closeIcon} alt="Close" />
          </button>

          <p className='text-2xl font-semibold mb-6'>Register Your Hotel</p>

          <input 
            type="text" 
            name="name" 
            placeholder="Hotel Name" 
            value={formData.name} 
            onChange={handleChange} 
            className='border p-2 rounded w-full mb-4'
            required
          />

          <input 
            type="text" 
            name="address" 
            placeholder="Address" 
            value={formData.address} 
            onChange={handleChange} 
            className='border p-2 rounded w-full mb-4'
            required
          />

          <select 
            name="city" 
            value={formData.city} 
            onChange={handleChange} 
            className='border p-2 rounded w-full mb-4'
            required
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>

          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            className='border p-2 rounded w-full mb-4'
            required
          />

          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number" 
            value={formData.phone} 
            onChange={handleChange} 
            className='border p-2 rounded w-full mb-6'
            required
          />

          <button 
            type="submit" 
            className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full'
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
