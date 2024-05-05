import { useEffect, useState } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { RiDashboardFill } from "react-icons/ri";
import { SiVirustotal } from "react-icons/si";
import "../Styles/UserDashboard.css";
import { FaSave } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
const UserDashBord = () => {
  const [data, setData] = useState([]);
  // const [saveJobs, setSavedJobs] = useState([]);
  const [fullTimeJobs, setFullTimeJobs] = useState([]);
  const [partTimeJobs, setPartTimeJobs] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  const navigate = useNavigate();
  const handleSettingBnt = () => {
    navigate("/ProfileSetting");
  };
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
  useEffect(() => {
    fullTimeFilterJobs();
    partTimeFilterJobs();
  }, [data]); // Trigger the effect whenever data changes

  const fullTimeFilterJobs = () => {
    let filterJobs = data.filter((item) => item.type === "Full-time");
    setFullTimeJobs(filterJobs);
  };

  const partTimeFilterJobs = () => {
    let filterJobs = data.filter((item) => item.type === "Part-time");
    setPartTimeJobs(filterJobs);
  };
  const ViewTotalJobs = () => {
    setViewAll(true);
  };
  const ViewLessJobs = () => {
    setViewAll(false);
  };

  return (
    <div className="dashboard bg-lightBlue h-screen relative top-[70px] flex p-3 overflow-hidden border">
      {/* ########## Left Section ##############*/}
      <div className="border bg-white py-2 h-full leftSec">
        <div className="bg-mainColor w-full text-white flex justify-center items-center gap-2 ">
          <RiDashboardFill />
          <span className="p-1 ">Dashboard</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 p-3 ">
          <h1
            className="cursor-pointer"
            onClick={() => {
              navigate("/privacy");
            }}
          >
            Privacy Policy
          </h1>
          <div className="flex items-center gap-2  cursor-pointer">
            <CgProfile />
            <h1 onClick={() => handleSettingBnt()}> Profile</h1>
          </div>
          <div className="text-center flex  items-center cursor-pointer gap-2">
            <FaRegBookmark />
            <h1
              onClick={() => {
                navigate("/savejob");
              }}
            >
              Saved Jobs
            </h1>
          </div>
          <h1
            className="text-center cursor-pointer"
            onClick={() => {
              navigate("/termAndCondition");
            }}
          >
            Terms And Condition
          </h1>
          <button type="button" className="flex gap-2 items-center ">
            <RiLogoutCircleLine />
            Log out
          </button>
        </div>
      </div>
      {/* ########## Right Section ##############*/}
      <div className="rightSec  h-full p-3 flex flex-col gap-10">
        {/* ########## Top Section ##############*/}
        <div className="flex justify-evenly items-center flex-wrap gap-4 mt-4">
          <div className="bg-mainColor text-white flex items-center gap-2 p-3 rounded-md card upCard">
            <div className="flex flex-col">
              <span className=" font-bold">{data.length}</span>
              <p>Available Jobs</p>
            </div>
            <SiVirustotal className="text-[20px]" />
          </div>
          <div className="bg-mainColor text-white flex items-center gap-2 p-3 rounded-md card upCard">
            <div className="flex flex-col">
              <span className=" font-bold">20</span>
              <p>Saved Jobs</p>
            </div>
            <FaSave className="text-[20px]" />
          </div>
          <div className="bg-mainColor text-white flex items-center gap-2 p-3 rounded-md card upCard">
            <div className="flex flex-col">
              <span className=" font-bold">{fullTimeJobs.length}</span>
              <p>Full-Time Jobs</p>
            </div>
            <FaBusinessTime className="text-[20px]" />
          </div>
          <div className="bg-mainColor text-white flex items-center gap-2 p-3 rounded-md card upCard">
            <div className="flex flex-col">
              <span className=" font-bold">{partTimeJobs.length}</span>
              <p>Part-Time Jobs</p>
            </div>
            <FaBusinessTime className="text-[20px]" />
          </div>
        </div>
        {/* ########## Bottom Section ##############*/}
        <div className="w-full bg-white rounded-lg card">
          <div className="h-full p-3">
            <div className="flex justify-between items-center tableTopParent">
              <h1 className="text-mainColor font-bold text-[25px] uppercase">
                Total Jobs
              </h1>{" "}
              <div className="flex gap-2 buttonParent">
                {" "}
                <button
                  type="button"
                  className="bg-mainColor text-white p-3 rounded-xl tracking-wide font-medium uppercase card"
                  onClick={() => {
                    ViewTotalJobs();
                  }}
                >
                  View All
                </button>
                <button
                  type="button"
                  className="bg-mainColor text-white p-3 rounded-xl tracking-wide font-medium uppercase card"
                  onClick={() => {
                    ViewLessJobs();
                  }}
                >
                  View Less
                </button>
              </div>
            </div>
            <hr className="border-t-mainColor my-3 h-[2px]" />
            <div className="Jobstable max-h-[290px] overflow-y-scroll jobfetchClass px-2">
              <table className="w-[981px]  overflow-x-scroll ">
                <thead className="uppercase">
                  <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Salary</th>
                    <th>Employment Types</th>
                    <th>Location</th>
                    <th>City</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody className="tbody capitalize">
                  {viewAll
                    ? data?.map((job, index) => (
                        <tr key={index}>
                          <td>{job.id}</td>
                          <td>{job.title}</td>
                          <td>{job.salary}</td>
                          <td>{job.type}</td>
                          <td>{job.location}</td>
                          <td>{job.city}</td>
                          <td>{job.date}</td>
                        </tr>
                      ))
                    : data.slice(0, 10).map((job, index) => (
                        <tr key={index}>
                          <td>{job.id}</td>
                          <td>{job.title}</td>
                          <td>{job.salary}</td>
                          <td>{job.type}</td>
                          <td>{job.location}</td>
                          <td>{job.city}</td>
                          <td>{job.date}</td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashBord;
