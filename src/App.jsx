// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// // imported micro-frontends
// import AppA from "./projectA/mainA.jsx";
// import AppB from "./projectB/mainB.jsx";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <div style={{ display: "flex", height: "100vh" }}>

//         {/* SIDEBAR */}
//         <aside style={{
//           width: "220px",
//           background: "#111",
//           padding: "20px",
//           color: "white"
//         }}>
//           <h2>Projects</h2>

//           <Link to="/projectA" style={{ color: "white", display: "block", margin: "10px 0" }}>
//             Project A
//           </Link>

//           <Link to="/projectB" style={{ color: "white", display: "block", margin: "10px 0" }}>
//             Project B
//           </Link>
//         </aside>

//         {/* MAIN CONTENT */}
//         <main style={{ padding: 20, flex: 1 }}>
//           <Routes>
//             <Route path="/" element={<h1>Welcome to Unified Frontend</h1>} />

//             {/* Mount project A */}
//             <Route path="/projectA/*" element={<AppA />} />

//             {/* Mount project B */}
//             <Route path="/projectB/*" element={<AppB />} />
//           </Routes>
//         </main>

//       </div>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";

// Micro-frontends
import AppA from "./projectA/mainA.jsx";
import AppB from "./projectB/mainB.jsx";
import AppC from "./projectC/mainC.jsx";

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <BrowserRouter>
      <div style={{ display: "flex", height: "100vh", background: "#f5f5f5" }}>

        {/* SIDEBAR */}
        <aside
          style={{
            width: collapsed ? "70px" : "240px",
            background: "#1e1e2f",
            color: "white",
            padding: "20px 10px",
            transition: "width 0.3s ease",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}
        >
          {/* Sidebar Header */}
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: collapsed ? "center" : "space-between",
            padding: "0 10px"
          }}>
            {!collapsed && <h2 style={{ margin: 0 }}>Projects</h2>}

            {/* Toggle Button */}
            <button
              onClick={() => setCollapsed(!collapsed)}
              style={{
                background: "transparent",
                color: "white",
                border: "none",
                fontSize: "22px",
                cursor: "pointer"
              }}
            >
              {collapsed ? "➡" : "⬅"}
            </button>
          </div>

          {/* Nav Links */}
          <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <SidebarLink to="/" icon="🏠" label="Home" collapsed={collapsed} />
            <SidebarLink to="/projectA" icon="🅐" label="Project A" collapsed={collapsed} />
            <SidebarLink to="/projectB" icon="🅑" label="Project B" collapsed={collapsed} />
            <SidebarLink to="/projectC" icon="©️" label="Project C" collapsed={collapsed} />
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main style={{ padding: "40px", flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projectA/*" element={<AppA />} />
            <Route path="/projectB/*" element={<AppB />} />
            <Route path="/projectC/*" element={<AppC />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}


// COMPONENT: Sidebar Link
function SidebarLink({ to, icon, label, collapsed }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        padding: "12px",
        borderRadius: "8px",
        color: "white",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: collapsed ? "0" : "12px",
        background: isActive ? "#34344a" : "transparent",
        fontWeight: isActive ? "bold" : "normal",
        justifyContent: collapsed ? "center" : "flex-start",
        transition: "all 0.3s ease"
      })}
    >
      <span style={{ fontSize: "20px" }}>{icon}</span>
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
}


// HOMEPAGE UI
function Home() {
  return (
    <div style={{ paddingTop: "60px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "16px" }}>
        🚀 Welcome to Unified Frontend
      </h1>
      <p style={{ fontSize: "18px", color: "#555", maxWidth: "700px" }}>
        Select a project from the sidebar to begin exploring.  
        This unified interface gives you access to all tools in one place,  
        with a clean design and smooth navigation.
      </p>

      <div style={{
        marginTop: "40px",
        display: "flex",
        gap: "20px"
      }}>
        <Card title="Project A" desc="SEO Competitor Analysis(SERP) Dashboard" />
        <Card title="Project B" desc="Your second app" />
        <Card title="Project C" desc="SEO Content Optimizer (LangChain + Azure OpenAI LLMs) " />
      </div>
    </div>
  );
}

// SMALL CARD COMPONENT
function Card({ title, desc }) {
  return (
    <div style={{
      padding: "20px",
      background: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
      width: "200px"
    }}>
      <h3>{title}</h3>
      <p style={{ color: "#666" }}>{desc}</p>
    </div>
  );
}
