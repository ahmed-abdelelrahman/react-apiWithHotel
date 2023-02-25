import React, { useContext, useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; //
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { getDate } from "date-fns";

import { useNavigate } from "react-router-dom";
import HotelInfo from "../pages/HotelInfo";

const BookingModal = ({ hotelInfo, open, handleClose }) => {
  const navigate = useNavigate();
  const [guests, setGuests] = useState();
  const [selectedGuestCount, setSelectedGuestCount] = useState(1);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    selectedGuestCount(e.target.value);
  };

  function numberOfGuests(maxGuest) {
    const guestsArr = [];

    for (let i = 1; i <= maxGuest; i++) {
      guestsArr.push(i);
    }
    return guestsArr;
  }

  useEffect(() => {
    numberOfGuests(hotelInfo?.rooms[0]?.content?.split(" ")[0]);
  }, [hotelInfo]);

  function getTotalNightsBooked() {
    const startDate = getDate(dates[0].startDate);
    const endDate = getDate(dates[0].endDate);

    const totalnightsBooked = endDate - startDate;
    return totalnightsBooked;
  }

  getTotalNightsBooked();

  return <div></div>;
};

export default BookingModal;
