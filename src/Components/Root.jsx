import React, { useState } from "react";
import App from "./App";
import Preloader from "./Preloader";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 500);

  return (
    <React.StrictMode>{isLoading ? <Preloader /> : <App />}</React.StrictMode>
  );
};

export default Root;
