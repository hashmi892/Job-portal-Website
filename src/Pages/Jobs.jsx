import { useState } from "react";
import HomePageJobCard from "./HomePageJobCard";
import "../Styles/Jobs.css";
const Jobs = () => {
  const [data, setData] = useState();
  const fetchJobs = async () => {
    const url =
      "https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "08e7b7ed54mshf2a20bf238a72a9p15005ejsn3461269054a0",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.error(error);
    }
  };
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
      <div className="flex gap-3 jobsBtn">
        {data && data.length !== 0 ? (
          <button
            onClick={() => {
              fetchJobs();
            }}
            className="bg-white text-mainColor hover:text-white border border-white hover:bg-transparent px-3 py-2 rounded-full font-bold tracking-wide
         "
          >
            See More Jobs
          </button>
        ) : (
          <button
            onClick={() => {
              fetchJobs();
            }}
            className="bg-white text-mainColor hover:text-white border border-white hover:bg-transparent px-3 py-2 rounded-full font-bold tracking-wide"
          >
            See Available Jobs
          </button>
        )}
      </div>
    </div>
  );
};

export default Jobs;
