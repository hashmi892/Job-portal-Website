import React, { useState, useEffect } from "react";
import "../Styles/FindJob.css";
import JobCard from "../Components/JobCard/JobCard";

// Your API call URL
// ("https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA");

const FindJobs = () => {
  const [locaInfo, setLocaInfo] = useState("");
  const [jobInfo, setJobInfo] = useState("");
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [Locword1, setLocWord1] = useState("");
  const [Locword2, setLocWord2] = useState("");
  const [data, setData] = useState([]);
  const [remoteJobs, setRemoteJobs] = useState("");
  const [employmentType, setEmploymentType] = useState("");

  // Function to format the API URL based on user inputs
  const HandleApiFormate = () => {
    const words = jobInfo.split(" ");
    const location = locaInfo.split(" ");
    let ApiUrl;

    if (
      words.length === 2 &&
      location.length === 1 &&
      remoteJobs.length > 0 &&
      employmentType.length > 0
    ) {
      setWord1(words[0]);
      setWord2(words[1]);
      setLocaInfo(locaInfo);

      ApiUrl = `https://jsearch.p.rapidapi.com/search?query=${word1}%20${word2}%20in%20${locaInfo}&page=1&num_pages=10&remote_jobs_only=${remoteJobs}&employment_types=${employmentType}`;
      return ApiUrl;
    } else if (
      words.length === 2 &&
      location.length === 1 &&
      remoteJobs.length > 0
    ) {
      setWord1(words[0]);
      setWord2(words[1]);
      setLocaInfo(locaInfo);

      ApiUrl = `https://jsearch.p.rapidapi.com/search?query=${word1}%20${word2}%20in%20${locaInfo}&page=1&num_pages=10&remote_jobs_only=${remoteJobs}`;
      return ApiUrl;
    } else if (words.length === 2 && location.length === 1) {
      setWord1(words[0]);
      setWord2(words[1]);
      setLocaInfo(locaInfo);
      ApiUrl = `https://jsearch.p.rapidapi.com/search?query=${word1}%20${word2}%20in%20${locaInfo}&page=1&num_pages=10`;
      return ApiUrl;
    } else if (
      words.length === 2 &&
      location.length === 2 &&
      remoteJobs.length > 0 &&
      employmentType.length > 0
    ) {
      setWord1(words[0]);
      setWord2(words[1]);
      setLocWord1(location[0]);
      setLocWord2(location[1]);

      ApiUrl = `https://jsearch.p.rapidapi.com/search?query=${word1}%20${word2}%20in%20${Locword1}%20${Locword2}&page=1&num_pages=10&remote_jobs_only=${remoteJobs}&employment_types=${employmentType}`;
      return ApiUrl;
    } else if (
      words.length === 2 &&
      location.length === 2 &&
      remoteJobs.length > 0
    ) {
      setWord1(words[0]);
      setWord2(words[1]);
      setLocWord1(location[0]);
      setLocWord2(location[1]);

      ApiUrl = `https://jsearch.p.rapidapi.com/search?query=${word1}%20${word2}%20in%20${Locword1}%20${Locword2}&page=1&num_pages=10&remote_jobs_only=${remoteJobs}`;
      return ApiUrl;
    } else if (words.length === 2 && location.length === 2) {
      setWord1(words[0]);
      setWord2(words[1]);
      setLocWord1(location[0]);
      setLocWord2(location[1]);
      ApiUrl = `https://jsearch.p.rapidapi.com/search?query=${word1}%20${word2}%20in%20${Locword1}%20${Locword2}&page=1&num_pages=10`;
      return ApiUrl;
    } else if (
      words.length === 1 &&
      location.length === 1 &&
      remoteJobs.length > 0 &&
      employmentType.length > 0
    ) {
      setJobInfo(jobInfo);
      setLocaInfo(locaInfo);

      ApiUrl = `https://jsearch.p.rapidapi.com/search?query=${jobInfo}%20in%20${locaInfo}&page=1&num_pages=10&remote_jobs_only=${remoteJobs}&employment_types=${employmentType}`;
      return ApiUrl;
    } else if (
      words.length === 1 &&
      location.length === 1 &&
      remoteJobs.length > 0
    ) {
      setJobInfo(jobInfo);
      setLocaInfo(locaInfo);

      ApiUrl = `https://jsearch.p.rapidapi.com/search?query=${jobInfo}%20in%20${locaInfo}&page=1&num_pages=10&remote_jobs_only=${remoteJobs}`;
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
    <div className="contact  relative top-[70px] min-h-[400px]  bg-mainColor padding-y ">
      <div>
        <h1 className="text-center text-white text-5xl font-bold tracking-wide max-xsm:text-3xl">
          Search
          <span className=" ms-4 fancySpan bg-white text-mainColor p-6 font-bold inline-block">
            Jobs
          </span>
        </h1>
        <div className="  mainDiv py-12 px-4 flex justify-center max-container">
          <div className="InputSec">
            <form action="" className="flex flex-col gap-8">
              <div className="flex items-center justify-between gap-36 max-sm:gap-5 max-xms:flex-col">
                {/* Job search input */}
                <div className="flex flex-col gap-2 self-start">
                  <p className="text-white text-[19px] max-xms:text-center">
                    Search
                  </p>
                  <input
                    type="search"
                    name="jobSearch"
                    id="jobSearch"
                    className="py-1 rounded-md px-1 border-none outline-none focus:outline-none text-[19px]"
                    placeholder="Search For Jobs..."
                    value={jobInfo}
                    onChange={(e) => setJobInfo(e.target.value)}
                    autoComplete="off"
                  />
                </div>
                {/* Filters */}
                <div className=" flex flex-col gap-3">
                  <div className="">
                    <p className="text-white text-[19px] tracking-wide max-xms:text-center">
                      Filters
                    </p>
                  </div>
                  <div className=" flex flex-col gap-3">
                    <div className="flex justify-between gap-5 max-ms:flex-col max-ms:gap-2">
                      <div className="flex flex-col gap-1">
                        <div>
                          <label htmlFor="jobSearch">Location</label>
                        </div>
                        <div className="locInput relative">
                          <input
                            type="search"
                            name="jobSearch"
                            id="jobSearch"
                            className="py-1 w-full rounded-md px-1 border-none outline-none focus:outline-none text-[15px] "
                            placeholder="Enter Your Location"
                            value={locaInfo}
                            onChange={(e) => setLocaInfo(e.target.value)}
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="remoteJobsOnly">Remote Jobs Only</label>
                        <select
                          name="remoteJobsOnly"
                          id="remoteJobsOnly"
                          className="py-1 w-full rounded-md  border-none outline-none focus:outline-none text-[15px] "
                          value={remoteJobs}
                          onChange={(e) => setRemoteJobs(e.target.value)}
                        >
                          <option value=""></option>
                          <option value="true">True</option>
                          <option value="false">False</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex justify-between gap-5 max-ms:flex-col max-ms:gap-2">
                      <div className="flex flex-col gap-1">
                        <label htmlFor="employment_types">
                          Employment Type
                        </label>
                        <select
                          name="employment_types"
                          id="employment_types"
                          className="py-1 w-full rounded-md  border-none outline-none focus:outline-none text-[15px] "
                          value={employmentType}
                          onChange={(e) => setEmploymentType(e.target.value)}
                        >
                          <option value=""></option>
                          <option value="FULLTIME">FULLTIME</option>
                          <option value="CONTRACTOR">CONTRACTOR</option>
                          <option value="PARTTIME">PARTTIME</option>
                          <option value="INTERN">INTERN</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Button to trigger data fetch */}
              <button
                className="bg-BtnBg1 text-white  py-4 rounded-full font-bold font-montserrat hover:bg-transparent border border-BtnBg1  hover:border-white btn-transition shadow-3xl"
                type="button"
                onClick={fetchData}
              >
                Find Jobs
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Display JobCard component with fetched data */}
      <div className="jobfetchClass max-container max-h-[700px] overflow-y-auto">
        <JobCard data={data} />
      </div>
    </div>
  );
};

export default FindJobs;
