import React from "react";
import { useNavigate } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  return (
    <div className='rounded overflow-hidden shadow-lg'>
      <img
        className='w-full h-60'
        src={hotel.thumbnail}
        alt='hotel'
        loading='lazy'
      />
      <div
        className='px-6 py-4'
        onClick={() => navigate(`/hotels/${hotel.slug}`)}
      >
        <div className='font-bold text-xl mb-2'>{hotel.address}</div>
        <p className='text-gray-700 text-base'>${hotel.pricePerNight}</p>
      </div>
    </div>
  );
};

export default HotelCard;
