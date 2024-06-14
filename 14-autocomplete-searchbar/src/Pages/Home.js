import React, { useEffect, useState } from 'react'

const Home = () => {

    // Local State 
    const [searchText, setSearchText] = useState("")
    const [suggestionList, setSuggestionList] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [cache, setCache] = useState({})
    console.log(cache)

    // Methods 
    const fetchData = async () => {
        // if Cache has data, send data from here
        // if Cache doesn't data, make API call
        if (cache[searchText]) {
            setSuggestionList(cache[searchText])
        }
        else {
            const url = `https://www.google.com/complete/search?client=firefox&q=${searchText}` //  use this with cors extension
            const response = await fetch(url);
            const data = await response.json();
            setSuggestionList(data[1])
            setCache(prevCache => ({ ...prevCache, [searchText]: data[1] }));
        }
    }

    useEffect(() => {
        // Debouncing
        const timerId = setTimeout(() => fetchData(), 300)
        return () => clearTimeout(timerId)

    }, [searchText])

    return (
        <div className='flex flex-col items-center m-4'>
            <div>
                <input className="p-3 border border-orange-500 rounded-md w-96"
                    type='text'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                />
            </div>
            {showSuggestions && suggestionList.length > 0 &&
                <ul className="pl-3 pr-3 border border-green-500 rounded-md w-96 ">
                    {suggestionList.map((suggestion) => <li key={suggestion} className='p-2 m-1 hover:cursor-pointer hover:bg-slate-400 hover:rounded-md'>{suggestion}</li>)}
                </ul>
            }
        </div>
    )
}

export default Home