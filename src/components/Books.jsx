import React, { useState, useEffect } from 'react';

function Books() {
  // Book data state
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data
    fetch('https://openlibrary.org/people/mekBot/books/want-to-read.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Set the fetched data to state
        console.log(data); // Check the structure in the console
        setLoading(false);
      })
      .catch((error) => {
        setError(error); // Handle error
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this runs once after the component mounts

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>Error: {error.message}</div>; // Show error if something goes wrong

  return (
    <>
      {/* Check if data exists and map over the entries */}
      {data && data.reading_log_entries && data.reading_log_entries.map((entry, index) => (
        <div key={index} className='h-[100px] m-2 p-3 bg-white flex justify-evenly shadow-xl items-center rounded-lg'>
          {/* Image */}
          <img
            src={`https://covers.openlibrary.org/b/id/${entry.work.cover_id}-M.jpg`}  // Using cover_id from the entry
            alt="Book Cover"
            className='rounded-lg w-[100px] h-[50px]'
          />

          {/* Title */}
          <div className='flex flex-col justify-center'>
            <h2 className='font-bold text-gray-500'>{entry.work.title}</h2>
            <h4 className='text-gray-500'>
              {entry.work.author_names ? entry.work.author_names.join(', ') : 'Unknown Author'}
            </h4>
          </div>

          {/* Rating (Example Placeholder, You can adjust this logic later) */}
          <div className='flex flex-col justify-center'>
            <h2>4.5</h2>
          </div>

          {/* Category (Placeholder for now) */}
          <div className='flex flex-col justify-center'>
            <h2 className='text-gray-500'>Cookbook</h2>
          </div>

          {/* Availability (You can customize this based on your data) */}
          <div className='flex flex-col justify-center'>
            <ul>
              <p className='text-sm text-[lime] font-bold'>
                <i className="fa-solid fa-check mr-1"></i>hard-copy
              </p>
              <p className='text-sm text-[lime] font-bold'>
                <i className="fa-solid fa-check mr-1"></i>E-book
              </p>
            </ul>
          </div>

          {/* Status */}
          <div className='flex flex-col justify-center'>
            <button className='bg-[lime] text-white text-sm p-1 rounded-lg'>In-Self</button>
          </div>
          <div className='flex flex-col justify-center'>
            <i className="fa-solid fa-heart text-rose-500"></i>
          </div>
          <div className='flex flex-col justify-center'>
            <button className='text-rose-500 border-[1px] w-[90px] border-rose-500 p-1 rounded-lg'>Preview</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Books;
