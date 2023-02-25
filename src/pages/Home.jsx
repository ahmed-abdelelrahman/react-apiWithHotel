import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { getHotels } from "../api/Request";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import HotelCard from "../components/HotelCard";

const Home = () => {
  const [Hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchHotels = async () => {
    try {
      setIsLoading(true);
      const { data } = await getHotels();
      setIsLoading(false);
      setHotels(data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <div>
      <Navbar />
      {isLoading ? (
        <Skeleton />
      ) : (
        <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
          {Hotels?.map((item) => (
            <HotelCard hotel={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
