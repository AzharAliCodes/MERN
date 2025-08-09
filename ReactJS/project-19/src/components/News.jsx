import React from "react";

const News = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-800 text-white text-center px-4">
      <p className="text-lg sm:text-xl font-semibold">
         <i className="fi fi-ss-check-circle text-green-500 text-sm"></i>
        <i className="fi fi-sr-cross-circle text-red-500 text-sm"></i>
        📢 This feature is currently not available. <br />
        We are sorry about it. We will create it soon.
      </p>
    </div>
  );
};

export default News;
