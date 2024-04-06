import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Preloader from "./Preloader";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <React.StrictMode>{isLoading ? <Preloader /> : <App />}</React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
