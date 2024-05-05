// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { useState } from "react";
// // import $ from "jquery";

// function PostJob() {
//   const [JobId, setJobId] = useState("");
//   const [JobTitle, setJobTitle] = useState("");
//   const [JobLocation, setJobLocation] = useState("");
//   const [JobSalary, setJobSalary] = useState("");
//   const [PhoneNumber, setPhoneNumber] = useState("");
//   const [Email, setEmail] = useState("");
//   const [JobType, setJobType] = useState("");
//   const [JobDescription, setJobDescription] = useState("");

//   const handleonChnage = () => {
//     e.preventdefault();
//   };
//   const handleSubmit = () => {
//     e.preventDefault();
//     const form = $(e.target);
//     $.ajax({
//       type: "POST",
//       url: form.attr("action"),
//       data: form.serialize(),
//       success(data) {
//         setJobId(JobId);
//         JobTitle(setJobTitle);
//         JobLocation(setJobLocation);
//         JobSalary(setJobSalary);
//         PhoneNumber(setPhoneNumber);
//         Email(setEmail);
//         JobType(setJobType);
//         JobDescription(setJobDescription);

//         alert("Job Posted Successfully");

//         navigate("http://localhost/Fyp/Job-Portal/src/Pages/Login");
//         console.log(data);
//       },
//     });
//   };

//   return (
//     <>
//       <div className="container  relative top-[80px] p-5">
//         <h1> Post A New Job</h1>

//         <Form
//           action="http://localhost/Fyp/Job-Portal/src/Backend/PostJobData.php"
//           method="post"
//           className="postForm flex flex-col gap-7"
//           onSubmit={handleSubmit}
//         >
//           <Form.Group className="mb-3" controlId="Jobid">
//             <Form.Label>Job Id</Form.Label>
//             <Form.Control
//               type="number"
//               placeholder="for-example 44,34 "
//               onChange={handleonChnage}
//               name="Jobid"
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="title">
//             <Form.Label>Job title</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="for-example system analyst"
//               onChange={handleonChnage}
//               name="jobtitle"
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="location">
//             <Form.Label>Job Location </Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="for-example Las Vegas"
//               onChange={handleonChnage}
//               name="joblocation"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="Job Salary">
//             <Form.Label>Job Salary </Form.Label>
//             <Form.Control
//               type="number"
//               placeholder="for-example 40000,50000"
//               onChange={handleonChnage}
//               name="jobsalary"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="Job type">
//             <Form.Label>Job Type </Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="for-example part-time,full-time"
//               onChange={handleonChnage}
//               name="jobtype"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="Job Description">
//             <Form.Label>Job Description </Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="for-example
// Developing software solutions"
//               onChange={handleonChnage}
//               name="jobdescription"
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Post
//           </Button>
//         </Form>
//       </div>
//     </>
//   );
// }

// export default PostJob;
import "../Styles/PostJob.css";
const PostJobs = () => {
  return (
    <div className="relative top-[70px] min-h-[400px] bg-mainColor padding-y p-7 postJonDiv">
      <div className="flex flex-col gap-10">
        <h1 className="text-center text-white text-5xl font-bold tracking-wide max-xsm:text-2xl my-3">
          Post
          <span className="ms-4 fancySpan bg-white text-mainColor p-6 font-bold inline-block">
            Job
          </span>
        </h1>
        <div>
          <form action="" className="">
            <div className="contactForm grid grid-cols-3 max-lg:grid-cols-2 gap-3 max-xms:grid-cols-1">
              <div className="label">
                <label htmlFor="Id">Job Id</label>
                <input
                  type="number"
                  name="Id"
                  id="Id"
                  placeholder="For Example 1,2"
                  required
                />
              </div>
              <div className="label">
                <label htmlFor="title">Job Tile</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="For Example Web Developer"
                  required
                />
              </div>
              <div className="label">
                <label htmlFor="location">Job Location</label>{" "}
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="For Example Pakistan"
                  required
                />
              </div>
              <div className="label">
                <label htmlFor="salary">Job Salary</label>
                <input
                  type="number"
                  name="salary"
                  id="salary"
                  placeholder="For Example 20000"
                  required
                />
              </div>
              <div className="label">
                <label htmlFor="type">Job Type</label>
                <input
                  type="text"
                  name="type"
                  placeholder="For Example Full-Time,Part-time"
                  required
                  id="type"
                />
              </div>
              <div className="label">
                <label htmlFor="description">Job Description</label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  required
                />
              </div>
            </div>
            <div className="PostJobBtn w-full flex mt-5 justify-center">
              <button type="submit" className="">
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJobs;
