import axios from 'axios';

const searchImages = async (search) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID You API KEY',//Change this to 'Client-ID Your key'
    },
    params: {
      query: search,
    },
  });


  return response.data.results;
};

export default searchImages;
