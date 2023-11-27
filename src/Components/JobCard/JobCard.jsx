import React from "react";
import "./JobCard.css";

// Component to display job cards using provided data
const JobCard = ({ data }) => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-20">
      {data.map((element, index) => (
        // Individual job card
        <div
          key={index}
          className="card bg-white max-w-xs rounded-2xl p-5 flex flex-col gap-3 flex-wrap"
        >
          {/* Company logo */}
          <div className="logo w-[100px] h-[60px] flex justify-center items-center my-3">
            <img
              src={element.employer_logo}
              alt="Company Logo"
              className="w-full h-full"
            />
          </div>

          {/* Job title */}
          <div className="JobTitle">
            <h1 className="font-bold text-xl">
              Job Title :
              <span className="text-mainColor tracking-wide">
                {" "}
                {element.job_title}
              </span>
            </h1>
          </div>

          {/* Company name */}
          <div className="Company_name">
            <span className="font-bold"> Company Name : </span>
            <h3 className="text-mainColor font-semibold inline">
              {element.employer_name}
            </h3>
          </div>

          {/* Country information */}
          <div className="Country_Info">
            <span className="font-bold">Country : </span>
            <h3 className=" text-mainColor font-semibold inline">
              {element.job_country}
            </h3>
          </div>

          {/* Job Employment Type */}
          <div className="Job_Employment_Type">
            <span className="font-bold">Job Employment Type :</span>
            <h3 className=" text-mainColor font-semibold inline">
              {" "}
              {element.job_employment_type}
            </h3>
          </div>

          {/* Salary */}
          <div className="salery">
            <span className="font-bold">Salary : </span>
            <h3 className=" text-mainColor font-semibold inline">
              {element.job_max_salary}$
            </h3>
          </div>

          {/* Apply button */}
          <a className="Apply_btn" href={element.job_apply_link}>
            <button
              type="button"
              className="btn-transition border border-transparent bg-mainColor text-white rounded-full p-3 tracking-wide font-semibold  hover:border hover:border-mainColor hover:bg-white hover:text-mainColor"
            >
              Click to apply
            </button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
