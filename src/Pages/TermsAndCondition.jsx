import "../Styles/TermsAndCondtion.css";
const TermsAndCondition = () => {
  return (
    <>
      <div className="borderBottomClass relative top-[70px] bg-mainColor text-white p-3 term">
        <h1 className="">
          Terms And
          <span className="ms-4 fancySpan bg-white text-mainColor p-6 font-bold inline-block">
            Condition
          </span>
        </h1>
        <p>
          Welcome to JobQuest! These terms and conditions govern your use of our
          website, JobQuest, which is an online platform for job seekers and
          employers to find and post jobs. By using JobQuest, you agree to abide
          by these terms and conditions. If you are using JobQuest on behalf of
          a company, organization, or other entity, you represent that you have
          the authority to bind that entity to these terms and conditions.
        </p>{" "}
        <h1>User Responsibilities</h1>
        <p>
          {" "}
          You are responsible for the information you provide on JobQuest,
          including job postings and resumes. - JobQuest does not guarantee the
          accuracy or reliability of the information posted by users. - We
          reserve the right to remove any user-generated content from the
          platform at our discretion.
        </p>{" "}
        <h1>Limitation of Liability</h1>
        <p>
          JobQuest is not responsible for any loss or damage resulting from the
          use of our platform. - We are not liable for any interruptions or
          technical issues with the platform. - We are not responsible for
          events beyond our control, such as natural disasters or internet
          outages.
        </p>{" "}
        <h1>Third-Party Services</h1>
        <p>
          JobQuest may use third-party services for certain functions, such as
          payment processing. - We are not responsible for the actions or
          reliability of third-party services.
        </p>
        <h1></h1>Changes to Terms and Conditions:** - We reserve the right to
        update or modify these terms and conditions at any time. - Any changes
        will be communicated to users through our website.<h1>Contact Us</h1>
        <p>
          {" "}
          If you have any questions or concerns about these terms and
          conditions, please contact us at jobportal@gmail.com By using
          JobQuest, you agree to these terms and conditions. Thank you for
          choosing JobQuest!
        </p>
      </div>
    </>
  );
};

export default TermsAndCondition;
