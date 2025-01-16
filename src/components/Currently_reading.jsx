import React from 'react'

import { useState,useEffect } from 'react'


function Currently_reading() {

    const [data,setData]=useState(null);
    
    const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State for error handling

  const fetchData=async ()=>{
    try{
        const response = await fetch("https://openlibrary.org/people/mekBot/books/already-read.json");

        if (!response.ok){
            throw new Error("Network problem");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
    }
    catch{
        setError(error);
        setLoading(false);
    }

  };


  useEffect(()=>{
    fetchData();
  },[])
if (loading) return <p>Loading ...</p>
if (error) return <p>Error: {error.message}</p>

    return (
        <>
            { data && data.reading_log_entries && data.reading_log_entries.map((entry,index)=>(
                <div className="card card-border bg-base-100 w-96 m-2">
                <div className="card-body">
                    <h2 className="card-title">{entry.work.title}</h2>
                    <p>Author Name: {entry.work.author_names ? entry.work.author_names.join(','): "unknown author"}</p>
                    <p>First Publication: {entry.work.first_publish_year}</p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            ))}
        </>
    )
}

export default Currently_reading
