export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'da35b7f2c0mshf5c4b6f7e0bcb51p11e7cbjsn0cc2639e0c74',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}


// process.env.REACT_APP_RAPID_API_KEY