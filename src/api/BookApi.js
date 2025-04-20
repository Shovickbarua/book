import axios from "axios";

const BookApi = () => {};


BookApi.search = async (query) => {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;
    
    try {
        const res = await axios.get(url);
        return { success: true, data: res.data };
    } catch (error) {
        return { success: false, message: error.message };
    }
};


export default BookApi;