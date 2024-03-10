import React, { useEffect, useState } from "react";

const useDateComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const updateDate = () => {
    setCurrentDate(new Date());
  };

  useEffect(() => {
    // Update the date every second (for example)
    const intervalId = setInterval(updateDate, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDate.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const monthName = currentDate.toLocaleDateString(undefined, {
    month: "long",
  });

  // Return the values from the hook
  return {
    formattedDate,
    monthName,
  };
};

export default useDateComponent;
