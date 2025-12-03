// import Dashboard from "./components/SeoTextAnalyzer"; // or other components

// export default function AppB() {
//   return (
//     <div className="app">
//       <h1>Project B</h1>
//       <Dashboard />
//     </div>
//   );
// }

import { Routes, Route } from "react-router-dom";
import SeoTextAnalyzer from "./components/SeoTextAnalyzer";

export default function AppB() {
  return (
    <Routes>
      <Route path="/" element={<SeoTextAnalyzer />} />
    </Routes>
  );
}
