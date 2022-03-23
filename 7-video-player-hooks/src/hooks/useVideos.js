import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

// custom hook to handle videos and setVideos
// input is the default search term in useEffect
// output is a list of videos and a way to search for videos (onTermSubmit)

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  // return an array with videos and onTermSubmit
  return [videos, search];
};

export default useVideos;
