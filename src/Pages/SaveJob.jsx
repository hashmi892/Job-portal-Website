import { useEffect, useState } from "react";
import JobCard from "../Components/JobCard/JobCard";

const SaveJob = () => {
  const [data, setData] = useState([]);
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
  return (
    <div className="borderBottomClass relative top-[70px]  bg-mainColor p-6 flex flex-col gap-20">
      <h1 className="text-center text-white text-5xl font-bold tracking-wide max-xsm:text-2xl mt-4">
        Saved
        <span className="ms-4 fancySpan bg-white text-mainColor p-6 font-bold inline-block">
          Jobs
        </span>
      </h1>
      <div className="jobfetchClass max-container max-h-[800px] overflow-y-auto">
        <JobCard filterData={data.slice(0, 10)} />
      </div>
    </div>
  );
};

export default SaveJob;
