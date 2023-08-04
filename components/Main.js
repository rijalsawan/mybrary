import React from 'react'

const Main = () => {
  function getFormattedDate(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const dayOfWeek = daysOfWeek[date.getDay()];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
  
    const formattedDate = `${dayOfWeek} ${month} ${day} ${year}`;
    return formattedDate;
  }
  
  // Example usage:
  const currentDate = new Date(); // Use any valid date here if you want to get the formatted date for a specific date.
  const formattedDate = getFormattedDate(currentDate);
  



  return (
    <>
        <div className="mx-24 my-40">
          <div className='flex justify-center'>
            <h1 className='text-center text-5xl text-white w-[25%] rounded-lg shadow-xl py-4 font-MochiyPopOne leading-normal'>{formattedDate}</h1>
          </div>
        </div>
    </>
  )
}

export default Main