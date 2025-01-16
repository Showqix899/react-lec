import React, { useState } from 'react'
import axios from 'axios'

function SearchBar() {

    const [query, setQuery] = useState("");
    const [resutls, setresults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`https://openlibrary.org/search.json?q=${query}`)
            setresults(response.data);
            console.log(response.data);

        } catch (err) {
            setError("Failed to fetch data")
        }
        finally {
            setLoading(false);
        }

    };


    return (
        <>
            <div>
                <h1>Search for a Book</h1>
                <form onSubmit={handleSearch}>
                    <input type="text"
                        placeholder='Enter Book Nmae'
                        value={query}
                        onChange={(e) => setquery(e.target.value)}
                    />
                    <button type='submit'>Search</button>
                </form>
            </div>
            {resutls.map((entry)=>(
                 <div className="card card-dash bg-base-100 w-96">
                 <div className="card-body">
                    <h2>{query}</h2>
                     <h2 className="card-title">{entry.author_name}</h2>
                     <p><b>Contributor: </b>{entry.contributor.join(',')}</p>
                    <p><b>Ebook Access:</b>{entry.ebook_access}</p>
                    <p><b>First Publication: </b>{entry.frist_publish_year}</p>
                    <p><b>First Sentence:</b>{entry.first_sentence}</p>
                 </div>
             </div>
            ))}
           

        </>
    )
}

export default SearchBar
