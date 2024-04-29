// Import necessary libraries and components
import { useEffect, useState } from "react";
import "../Styles/FindJob.css";
import JobCard from "../Components/JobCard/JobCard";
import AOS from "aos";
import "aos/dist/aos.css";
// Define the FindJobs component
const FindJobs = () => {
  // State variables for job information, filters, and UI states
  const [jobInfo, setJobInfo] = useState("");
  const [locaInfo, setLocaInfo] = useState("");
  const [jobSalary, setJobSalary] = useState("");
  const [jobId, setJobId] = useState("");
  const [filterTitle, setFilterTitle] = useState([]);
  const [TitleOption, setTitleOption] = useState(false);
  const [filterLocation, setfilterLocation] = useState([]);
  const [LocationOption, setLoactionOption] = useState(false);
  const [filterId, setfilterId] = useState([]);
  const [IdOption, setIdOption] = useState(false);
  const [filterSalary, setfilterSalary] = useState([]);
  const [SalaryOption, setSalaryOption] = useState(false);
  const [data, setData] = useState([]);
  const [handleFilterOptions, setHandleFilterOption] = useState(false);
  // Function to fetch job data from the backend
  async function fetchData() {
    try {
      let res = await fetch(
        `http://localhost/FYP/job-portal/JobPortalFYP/src/Backend/api_fetchall.php`
      );
      let fetchedData = await res.json();
      setData(fetchedData);
    } catch (error) {
      console.error(error);
    }
  }
  // UseEffect hook to fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);
  // Function to handle title filter
  const HandleTitleFilter = (value) => {
    let filtertitles = data.filter((item) => {
      return item.title === value;
    });
    setFilterTitle(filtertitles);
    setfilterLocation([]);
    setfilterId([]);
    setfilterSalary([]);
    setTitleOption(true);
    setIdOption(false);
    setLoactionOption(false);
    setJobSalary(false);
    setHandleFilterOption(false);
    setLocaInfo("");
    setJobSalary("");
    setJobId("");
  };
  // Function to handle location filter
  const HandleLocationFilter = (value) => {
    let filterLocations = data.filter((item) => {
      return item.location === value;
    });

    setFilterTitle([]);
    setfilterLocation(filterLocations);
    setfilterId([]);
    setfilterSalary([]);
    setTitleOption(false);
    setLoactionOption(true);
    setIdOption(false);
    setJobSalary(false);
    setHandleFilterOption(false);
    setJobSalary("");
    setJobId("");
    setJobInfo("");
  };

  // Function to handle ID filter
  const HandleIdFilter = (value) => {
    let filterIds = data.filter((item) => {
      return item.id === value;
    });
    setFilterTitle([]);
    setfilterLocation([]);
    setfilterId(filterIds);
    setfilterSalary([]);
    setTitleOption(false);
    setLoactionOption(false);
    setIdOption(true);
    setJobSalary(false);
    setHandleFilterOption(false);
    setLocaInfo("");
    setJobSalary("");
    // setJobId("");
    setJobInfo("");
  };
  // Function to handle salary filter
  const HandleSalaryFilter = (value) => {
    let filterSalaries = data.filter((item) => {
      return item.salary === value;
    });
    setFilterTitle([]);
    setfilterLocation([]);
    setfilterId([]);
    setfilterSalary(filterSalaries);
    setTitleOption(false);
    setLoactionOption(false);
    setIdOption(false);
    setSalaryOption(true);
    setHandleFilterOption(false);
    setLocaInfo("");
    setJobId("");
    setJobInfo("");
  };
  // Handle filter button click
  const hanldeFilters = () => {
    setHandleFilterOption(true);
  };
  //  JS AOS library
  useEffect(() => {
    AOS.init({ delay: 500, duration: 1000 });
  }, []);
  // Render the component
  return (
    <div className="contact relative top-[70px] min-h-[400px] bg-mainColor padding-y">
      <div className="my-2">
        {/*########### Page Title ############*/}
        <h1 className="text-center text-white text-5xl font-bold tracking-wide max-xsm:text-2xl my-3">
          Search
          <span className="ms-4 fancySpan bg-white text-mainColor p-6 font-bold inline-block">
            Jobs
          </span>
        </h1>
        {/*############## Filters Section Start #################### */}
        <div className="mainDiv py-12 px-4 flex justify-center max-container">
          <div className="InputSec">
            <form action="" className="flex flex-col gap-8">
              <div className="flex items-center justify-between gap-36 max-sm:gap-5 max-xms:flex-col">
                {/*########### Left section start ############*/}
                {/*########### Job Title Section ############*/}
                <div className="flex flex-col gap-1 p-2" data-aos="fade-right">
                  <label
                    htmlFor="jobSearch"
                    className=" fancySpan bg-white text-mainColor p-6 font-bold inline-block text-3xl"
                  >
                    Job Title
                  </label>
                  <div className="select-container">
                    <select
                      name="jobSearch"
                      id="jobSearch"
                      className=" w-full rounded-md  outline-none focus:outline-none text-[15px] select-box"
                      value={jobInfo}
                      onChange={(e) => {
                        setJobInfo(e.target.value);
                        HandleTitleFilter(e.target.value);
                      }}
                    >
                      <option value=""></option>
                      {/* Set { "Title 1", "Title 2" } */}
                      {[...new Set(data.map((item) => item.title))].map(
                        (title) => (
                          <option key={title} value={title} className="option">
                            {title}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>
                {/*########### Left section End ############*/}
                {/*########### Right section Start ############*/}
                <div className="flex flex-col gap-3  p-2" data-aos="fade-left">
                  {/*######## Filter Title Heading #########*/}
                  <div className="">
                    <p className=" fancySpan bg-white text-mainColor p-6 font-bold block text-3xl text-center my-4">
                      Filters
                    </p>
                  </div>
                  {/* ###### Filters ########## */}
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between gap-5 max-ms:flex-col max-ms:gap-2">
                      {/* Job Location Filter */}
                      <div className="flex flex-col gap-1">
                        <label
                          htmlFor="jobLocation"
                          className=" fancySpan bg-white text-mainColor p-6 font-bold inline-block text-3xl"
                        >
                          Job Location
                        </label>
                        <select
                          name="jobLocation"
                          id="jobLocation"
                          className="py-1 w-full rounded-md outline-none focus:outline-none text-[15px] select-box"
                          value={locaInfo}
                          onChange={(e) => {
                            setLocaInfo(e.target.value);
                            HandleLocationFilter(e.target.value);
                          }}
                        >
                          <option value=""></option>
                          {[...new Set(data.map((item) => item.location))].map(
                            (location) => (
                              <option key={location} value={location}>
                                {location}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                      {/*########### Job Id Filter ############*/}
                      <div className="flex flex-col gap-1">
                        <label
                          htmlFor="JobId"
                          className=" fancySpan bg-white text-mainColor p-6 font-bold inline-block text-3xl"
                        >
                          Job Id
                        </label>
                        <select
                          name="JobId"
                          id="JobId"
                          className="py-1 w-full rounded-md outline-none focus:outline-none text-[15px] select-box"
                          value={jobId}
                          onChange={(e) => {
                            setJobId(e.target.value);
                            HandleIdFilter(e.target.value);
                          }}
                        >
                          <option value=""></option>
                          {data.map((item) => (
                            <option key={item.id} value={item.id}>
                              {item.id}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    {/* ############ Job Salary Filter ############# */}
                    <div className="flex justify-between gap-5 max-ms:flex-col max-ms:gap-2">
                      <div className="flex flex-col gap-1">
                        <label
                          htmlFor="JobSalary"
                          className=" fancySpan bg-white text-mainColor p-6 font-bold inline-block text-3xl"
                        >
                          Job Salary
                        </label>
                        <select
                          name="JobSalary"
                          id="JobSalary"
                          className="py-1 w-full rounded-md outline-none focus:outline-none text-[15px] select-box"
                          value={jobSalary}
                          onChange={(e) => {
                            setJobSalary(e.target.value);
                            HandleSalaryFilter(e.target.value);
                          }}
                        >
                          <option value=""></option>
                          {[...new Set(data.map((item) => item.salary))].map(
                            (salary) => (
                              <option key={salary} value={salary}>
                                {salary}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                {/*########### Right section End ############*/}
              </div>
              {/* ############## Filter Button ############### */}
              <button
                className="bg-BtnBg1 text-white py-4 rounded-full font-bold font-montserrat hover:bg-transparent border border-BtnBg1 hover:border-white btn-transition shadow-3xl"
                type="button"
                onClick={() => {
                  hanldeFilters();
                }}
              >
                Find Jobs
              </button>
            </form>
          </div>
        </div>
      </div>
      {/*############## Filters Section End #################### */}
      {/*######### Job Display Section Start ######## */}
      <div className="jobfetchClass max-container max-h-[700px] overflow-y-auto">
        {handleFilterOptions && (
          <>
            {TitleOption && <JobCard key="title" filterData={filterTitle} />}
            {LocationOption && (
              <JobCard key="location" filterData={filterLocation} />
            )}
            {IdOption && <JobCard key="id" filterData={filterId} />}
            {SalaryOption && <JobCard key="salary" filterData={filterSalary} />}
          </>
        )}
      </div>
      {/*######### Job Display Section End ######## */}
    </div>
  );
};
// Export the FindJobs component
export default FindJobs;
