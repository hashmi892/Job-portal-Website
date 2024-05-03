import LogoBlackNobg from "../assets/Images/LogoBlackNobg.png";
const HomePageJobCard = ({ data }) => {
  return (
    <div>
      <div className="flex justify-center items-center flex-wrap gap-20">
        {data?.map((element, index) => (
          <div
            key={index}
            className="card bg-white max-w-xs rounded-2xl p-5 flex flex-col gap-3 flex-wrap"
          >
            {/* Company logo */}
            <div className="logo w-[100px] h-[60px] flex justify-center items-center my-3">
              <img
                src={
                  element.employer_logo ? element.employer_logo : LogoBlackNobg
                }
                alt="Company Logo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Job title */}
            <div className="JobTitle">
              <h1 className="font-bold text-xl">
                {/* Display job type based on filterType */}
                Job Title:
                <span className="text-mainColor tracking-wide">
                  {" "}
                  {element.job_title}
                </span>
              </h1>
            </div>
            {/* Company name */}
            <div>
              <span className="font-bold">Company name: </span>
              <h3 className="text-mainColor font-semibold inline">
                {element.employer_name}
              </h3>
            </div>
            {/* Job Country */}
            <div>
              <span className="font-bold">Country : </span>
              <h3 className="text-mainColor font-semibold inline">
                {element.job_country}
              </h3>
            </div>
            {/* Job City */}
            <div>
              <span className="font-bold">City : </span>
              <h3 className="text-mainColor font-semibold inline">
                {element.job_city}
              </h3>
            </div>
            {/* Job employment type */}
            <div>
              <span className="font-bold">Job Employment Type : </span>
              <h3 className="text-mainColor font-semibold inline">
                {element.job_employment_type}
              </h3>
            </div>
            {/* Reomote Job */}
            <div>
              <span className="font-bold">Remote Job : </span>
              <h3 className="text-mainColor font-semibold inline">
                {element.job_is_remote ? "True" : "False"}
              </h3>
            </div>
            {/* Salary */}
            <div>
              <span className="font-bold">Salary </span>
              <h3 className="text-mainColor font-semibold inline">
                {element.job_max_salary
                  ? element.job_max_salary
                  : "Not mentioned"}
              </h3>
            </div>
            {/* Job salary */}
            <div>
              <span className="font-bold">Job Posted Date : </span>
              <h3 className="text-mainColor font-semibold inline">
                {element.job_posted_at_datetime_utc}
              </h3>
            </div>
            {/* Job posted date */}
            <div className="flex justify-between items-center">
              <div>
                <a
                  href={element.job_apply_link}
                  className="bg-mainColor text-white font-semibold inline px-3 py-2 rounded-full"
                >
                  Apply Here
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageJobCard;
