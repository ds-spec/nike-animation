import React from "react";
import MainLoader from "./components/screeen-loader/MainLoader";

const App = () => {
  return (
    <div className="w-screen min-h-screen bg-black overflow-x-hidden">
      <MainLoader />
    </div>
  );
};

export default App;
