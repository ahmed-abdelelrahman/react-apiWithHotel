import React, { useEffect, useState } from "react";
import { getHotelBySlug } from "../api/Request";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { ImageGallery } from "../components/ImageGallary";

const HotelInfo = () => {
  const [open, setOpen] = useState(false);

  const params = useParams();
  const { slug } = params;

  const fetchHoteInfo = async () => {
    const { data } = await getHotelBySlug(slug);
    return data;
  };

  useEffect(() => {
    fetchHoteInfo();
  }, [slug]);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const { data } = useQuery("hotel-info", fetchHoteInfo);
  return (
    <div className='p-20'>
      <div className='w-full p-4 text-2xl text-start leading-10 '>
        {data?.name}
      </div>
      <ImageGallery images={data?.images} />
      <div className='flex mp-2 gap-2 text-gray'>
        {data?.rooms.map((room) => (
          <span className='text-slate-500'>{room.content}</span>
        ))}
      </div>
      <div className=' text-md font-semibold leading-7 text-start '>
        {data?.aboutThePlace}
      </div>
      <div className='p-5'>
        <button
          className='py-1 px-2 bg-blue-500 text-white rounded-md '
          onClick={handleOpen}
        >
          reserve
        </button>
      </div>
    </div>
  );
};

export default HotelInfo;
