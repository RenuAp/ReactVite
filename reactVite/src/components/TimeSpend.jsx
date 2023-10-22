import { useEffect, useState } from 'react';

const TimeSpend= () => {
  const [startTime, setStartTime] = useState(null);

  // Start the timer when the component mounts
  useEffect(() => {
    setStartTime(performance.now());
    console.log(startTime/1000, "StartTime")

    // Clean up the timer when the component unmounts or the user navigates away
    return () => {
      if (startTime) {
        const endTime = performance.now();
        console.log(endTime/1000, "endTime")
        const timeSpentInSeconds = (endTime - startTime) / 1000;

        // Log or send the time spent to your server
        console.log(`User spent ${timeSpentInSeconds} seconds on the page.`);
      }
    };
  },[startTime]);

  return (
    <div>
      {/* Your component content goes here */}
    </div>
  );
};

export default TimeSpend;