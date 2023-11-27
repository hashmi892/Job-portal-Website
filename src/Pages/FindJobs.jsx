import React, { useState, useEffect } from "react";
import "../Styles/FindJob.css";
import JobCard from "../Components/JobCard/JobCard";

const FindJobs = () => {
  const [locaInfo, setLocaInfo] = useState("");
  const [jobInfo, setJobInfo] = useState("");
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [Locword1, setLocWord1] = useState("");
  const [Locword2, setLocWord2] = useState("");
  const [data, setData] = useState([]);

  // Function to format the API URL based on user inputs
  const HandleApiFormate = () => {
    const words = jobInfo.split(" ");
    const location = locaInfo.split(" ");
    let ApiUrl;

    if (words.length === 2 && location.length === 1) {
      setWord1(words[0]);
      setWord2(words[1]);
      setLocaInfo(locaInfo);
      ApiUrl = `https://jsearch.p.rapidapi.com/search?query=${word1}%20${word2}%20in%20${locaInfo}&page=1&num_pages=10`;
      return ApiUrl;
    } else if (words.length === 2 && location.length === 2) {
      setWord1(words[0]);
      setWord2(words[1]);
      setLocWord1(location[0]);
      setLocWord2(location[1]);
      ApiUrl = `https://jsearch.p.rapidapi.com/search?query=${word1}%20${word2}%20in%20${Locword1}%20${Locword2}&page=1&num_pages=10`;
      return ApiUrl;
    } else {
      setJobInfo(jobInfo);
      setLocaInfo(locaInfo);
      ApiUrl = `https://jsearch.p.rapidapi.com/search?query=${jobInfo}%20in%20${locaInfo}&page=1&num_pages=10`;
      return ApiUrl;
    }
  };

  // Function to fetch data from the API
  const fetchData = async () => {
    const ApiFormatedUrl = HandleApiFormate();
    const url = ApiFormatedUrl;
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

  // Trigger HandleApiFormate when jobInfo or locaInfo changes
  useEffect(() => {
    HandleApiFormate();
  }, [jobInfo, locaInfo]);

  return (
    <div className="relative top-[70px] min-h-[400px]  bg-mainColor padding-y">
      <div className="mainDiv padding-y px-4 flex justify-center max-container">
        <div className="InputSec">
          <form
            action=""
            className="flex items-center gap-6 max-lg:flex-col max-lg:justify-center"
          >
            {/* Job search input */}
            <input
              type="search"
              name="jobSearch"
              id="jobSearch"
              className="w-96 max-sm:w-full  h-11 rounded-full p-7 text-[22px] focus:outline-none shadow-3xl"
              placeholder="Search For Jobs..."
              value={jobInfo}
              onChange={(e) => setJobInfo(e.target.value)}
              autoComplete="off"
            />
            {/* Location input */}
            <div className="locInput relative">
              <input
                type="search"
                name="jobSearch"
                id="jobSearch"
                className="w-96  max-sm:w-full  h-11 rounded-full p-7 text-[22px] focus:outline-none shadow-3xl"
                placeholder="Enter Your Location"
                value={locaInfo}
                onChange={(e) => setLocaInfo(e.target.value)}
                autoComplete="off"
              />
            </div>
            {/* Button to trigger data fetch */}
            <button
              className="bg-white text-mainColor px-7 py-4 rounded-full font-bold font-montserrat hover:bg-slate-gray hover:text-white btn-transition shadow-3xl"
              type="button"
              onClick={fetchData}
            >
              Find Jobs
            </button>
          </form>
        </div>
      </div>
      {/* Display JobCard component with fetched data */}
      <div className="max-container max-h-[700px] overflow-y-auto">
        <JobCard data={data} />
      </div>
    </div>
  );
};

export default FindJobs;
