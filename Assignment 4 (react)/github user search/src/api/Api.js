const API_BASE = 'https://api.github.com/search/users';

const fetchData = async (searchQuery) => {
    const response = await fetch(`${API_BASE}?q=${searchQuery}`).then( resp => resp.json());
    return response.items;
}

export default fetchData;

