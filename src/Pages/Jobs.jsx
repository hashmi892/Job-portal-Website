import { useState, useEffect } from "react";
import HomePageJobCard from "./HomePageJobCard";

const Jobs = () => {
  const [data, setData] = useState();

  const fetchJobs = async () => {
    const url = `https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=2&num_pages=5&date_posted=all`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d11454c6eemshb696724359f18f2p1a4874jsn6bf35739ffe3",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  {
    /* <FindJobs /> */
  }
  return (
    <div className="contact relative top-[70px] min-h-[400px] bg-mainColor padding-y flex flex-col justify-center items-center gap-9 border border-b-white border-s-transparent border-e-transparent border-t-transparent">
      <h1 className="text-center text-white text-5xl font-bold tracking-wide max-xsm:text-2xl my-5">
        Available
        <span className="ms-4 fancySpan bg-white text-mainColor p-6 font-bold inline-block">
          Jobs
        </span>
      </h1>
      <div className="jobfetchClass max-container max-h-[700px] overflow-y-auto mt-10">
        {data && <HomePageJobCard data={data} />}
      </div>
      <button
        onClick={() => {
          fetchJobs();
        }}
        className="bg-white text-mediumBlack  px-3 py-2 rounded-full font-bold
       "
      >
        See More Jobs
      </button>
    </div>
  );
};

export default Jobs;
