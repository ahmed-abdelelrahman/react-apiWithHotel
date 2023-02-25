import React from "react";

export const ImageGallery = ({ images }) => {
  return (
    <div className='grid lg:grid-cols-3 gap-2 grid-cols-2'>
      {images?.map((image) => (
        <img className='h-50 w-50 ' src={image.img} loading='lazy' />
      ))}
    </div>
  );
};
