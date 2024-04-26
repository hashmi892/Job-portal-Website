import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import ContactUs from "../Pages/ContactUs";
import FindJobs from "../Pages/FindJobs";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import ProfileSetting from "../Pages/ProfileSetting";
import Layout from "./Layout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="signUp" element={<SignUp />} />
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="aboutUs" element={<About />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="findJob" element={<FindJobs />} />
        <Route path="ProfileSetting" element={<ProfileSetting />} />
      </Route>
    </>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
