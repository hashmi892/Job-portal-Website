import React, { useState } from "react";
import "./JobCard.css";

const JobCard = ({ filterData, filterType }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e) => {
    if (e.target.checked) {
      console.log("✅ Job is Saved");
    } else {
      console.log("⛔️ Job is NOT Saved");
    }
    setIsSaved((current) => !current);
  };
  // Render job cards based on filterData and filterType
  return (
    <div className="flex justify-center items-center flex-wrap gap-20">
      {/* Map through filterData to render individual job cards */}
      {filterData?.map((element, index) => (
        <div
          key={index}
          className="card bg-white max-w-xs rounded-2xl p-5 flex flex-col gap-3 flex-wrap"
        >
          {/* Company logo */}
          <div className="logo w-[100px] h-[60px] flex justify-center items-center my-3">
            <img
              src={element.logo}
              alt="Company Logo"
              className="w-full h-full"
            />
          </div>
          {/* Job title */}
          <div className="JobTitle">
            <h1 className="font-bold text-xl">
              {/* Display job type based on filterType */}
              Job {filterType}:
              <span className="text-mainColor tracking-wide">
                {" "}
                {filterType === "Title"
                  ? element.title
                  : filterType === "Location"
                  ? element.location
                  : filterType === "Id"
                  ? element.id
                  : filterType === "Salary"
                  ? element.salary
                  : ""}
              </span>
            </h1>
          </div>
          {/* Job description */}
          <div>
            <span className="font-bold">Description: </span>
            <h3 className="text-mainColor font-semibold inline">
              {element.description}
            </h3>
          </div>
          {/* Job location */}
          <div>
            <span className="font-bold">Location : </span>
            <h3 className="text-mainColor font-semibold inline">
              {element.location}
            </h3>
          </div>
          {/* Job employment type */}
          <div>
            <span className="font-bold">Job Employment Type :</span>
            <h3 className="text-mainColor font-semibold inline">
              {element.type}
            </h3>
          </div>
          {/* Job ID */}
          <div>
            <span className="font-bold">ID :</span>
            <h3 className="text-mainColor font-semibold inline">
              {element.id}
            </h3>
          </div>
          {/* Job city */}
          <div>
            <span className="font-bold">City: </span>
            <h3 className="text-mainColor font-semibold inline">
              {element.city}
            </h3>
          </div>
          {/* Job salary */}
          <div>
            <span className="font-bold">Salary: </span>
            <h3 className="text-mainColor font-semibold inline">
              {element.salary}
            </h3>
          </div>
          {/* Job posted date */}
          <div className="flex justify-between items-center">
            <div>
              <span className="font-bold">Date posted: </span>
              <h3 className="text-mainColor font-semibold inline">
                {element.date}
              </h3>
            </div>
            <label className="ui-bookmark">
              <input
                type="checkbox"
                value={isSaved}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <div className="bookmark">
                <svg viewBox="0 0 32 32">
                  <g>
                    <path d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path>
                  </g>
                </svg>
              </div>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(JobCard);
