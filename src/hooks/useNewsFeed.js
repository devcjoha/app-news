import { useEffect, useState } from "react";
import axios from "axios";

// const url =`http://api.mediastack.com/v1/news?access_key=${MEDIASTACK_API_KEY}&countries=us,gb,de,ch,in,cn&categories=health,science,technology&languages=en,es&limit=${pageSize}&offset=${offset}`

// Se puede usar, actualmente usando el mockJson
export default function useNewsFeed({page = 1, pageSize = 50, isMock = true}) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
 const dataFetch = async () =>{
  try {
    let response;
    if(isMock){
      response = await axios.get(`http://localhost:3000/data`, {
          params: {
            _page: page,
            _limit: pageSize
          }
        });
      setArticles(response.data)
    } else {
      const offset = (page -1) * pageSize;
      response = await axios.get("http://api.mediastack.com/v1/news", {
            params: {
              access_key: import.meta.env.VITE_MEDIASTACK_API_KEY,
              countries: "us,gb,de,ch,in,cn",
              categories: "health,science,technology",
              languages: "en,es",
              limit: pageSize,
              offset,
            },
          });
          setArticles(response.data.data)
    }
  } catch (error) {
     if (error.response) {
          // El servidor respondió con un error
          setError(`Error ${error.response.status}: ${
              error.response.data.error?.message || "Api fail"
            }`);
        } else if (error.request) {
          // La petición salió pero no hubo respuesta
          setError("server not response");
        } else {
          // Error al configurar la petición
          setError(`Error: ${error.message}`);
        }
  } finally {
    setLoading(false)
  }
 } 
 dataFetch()
},[page, pageSize, isMock]);
return { articles, error, loading}
};