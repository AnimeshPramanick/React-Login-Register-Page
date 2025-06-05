import React from "react";

function Background() {
  return (
    <div className="background w-full h-[100vh] flex flex-col items-center">
      <img
        src="../assets/bg-image1.jpg"
        alt=""
        className="w-full h-[100vh] absolute top-0 -z-10 object-cover "
      />
    </div>
  );
}

export default Background;
