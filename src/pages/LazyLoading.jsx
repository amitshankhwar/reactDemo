// import React, { useState, useEffect } from "react";
// import Data1 from "./Data1";
// import Data2 from "./Data2";
// import Data3 from "./Data3";

// const LazyLoading = () => {
//   const [showData1, setShowData1] = useState(false); // State to control the rendering of Data1

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowData1(true); // Show Data1 after a 3-second delay
//     }, 3000);

//     return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
//   }, []);

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       {showData1 ? <Data1 /> : <p>Loading Data1...</p>}
//       <Data2 />
//       <Data3 />
//     </div>
//   );
// };

import React, { Suspense, lazy } from "react";

// Simulating a delay of 5000ms for loading Data1
const delayedImport = (importFunction) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(importFunction()), 5000);
  });
};

const Data1 = lazy(() => delayedImport(() => import("./Data1")));
import Data2 from "./Data2";
import Data3 from "./Data3";

const LazyLoading = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <Suspense fallback={<p>Loading Data1...</p>}>
        <Data1 />
      </Suspense>
      <Data2 />
      <Data3 />
    </div>
  );
};

export default LazyLoading;
