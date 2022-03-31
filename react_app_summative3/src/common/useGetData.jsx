import React, { useState, useEffect } from "react";
import axios from "axios";

function useGetData(url) {
  const [data, setData] = useState([]);
  // const [url, setUrl] = useState("http://localhost:4000/api/commnet");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);
        setData(result.data);
        // console.log(result.data.testCommentAuthor);
        console.log('useGetData = ',result.data);
        // console.log('useGetData =json2 ',result.data);

      } catch (error) {
        setData(JSON.stringify(error,null,2));
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { data, isLoading, isError,error };
}

export default useGetData;
