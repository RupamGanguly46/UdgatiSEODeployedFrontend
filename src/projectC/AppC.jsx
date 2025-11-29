// import React, { useState } from "react";

// function App() {
//   const [text, setText] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const runSEO = async () => {
//     if (!text.trim()) return alert("Enter some text!");
//     setLoading(true);
//     setResult(null);

//     try {
//       const response = await fetch("http://127.0.0.1:8000/run_chain", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ text })
//       });

//       const data = await response.json();
//       setResult(data);
//     } catch (err) {
//       alert("Error: " + err.message);
//     }

//     setLoading(false);
//   };

//   return (
//     <div style={{ width: "700px", margin: "0 auto", padding: "20px" }}>
//       <h2>SEO Automation Tool</h2>

//       <textarea
//         style={{ width: "100%", height: "140px", padding: "10px" }}
//         placeholder="Enter your content..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />

//       <button onClick={runSEO} style={{ padding: "10px 20px" }}>
//         {loading ? "Processing..." : "Generate SEO Results"}
//       </button>

//       {result && (
//         <pre style={{ background: "#f4f4f4", padding: "20px" }}>
//           {JSON.stringify(result, null, 2)}
//         </pre>
//       )}
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [text, setText] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [activeTab, setActiveTab] = useState("topic");

//   const runSEO = async () => {
//     if (!text.trim()) return alert("Please enter some text!");

//     setLoading(true);
//     setResult(null);

//     try {
//       const response = await fetch("http://127.0.0.1:8000/run_chain", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ text }),
//       });

//       const data = await response.json();
//       setResult(data);
//     } catch (err) {
//       alert("Error: " + err.message);
//     }

//     setLoading(false);
//   };

//   const copyText = (value) => {
//     navigator.clipboard.writeText(value);
//     alert("Copied!");
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.card}>
//         <h1 style={styles.title}>SEO Optimization Tool</h1>

//         <textarea
//           placeholder="Enter your content..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           style={styles.textarea}
//         />

//         <button onClick={runSEO} style={styles.button}>
//           {loading ? "Processing..." : "Generate SEO Data"}
//         </button>

//         {result && (
//           <div>
//             {/* TAB BUTTONS */}
//             <div style={styles.tabs}>
//               {["topic", "keywords", "meta", "outline"].map((tab) => (
//                 <button
//                   key={tab}
//                   style={{
//                     ...styles.tabButton,
//                     background:
//                       activeTab === tab ? "rgba(255,255,255,0.3)" : "transparent",
//                   }}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab.toUpperCase()}
//                 </button>
//               ))}
//             </div>

//             {/* TAB CONTENT */}
//             <div style={styles.outputBox}>
//               {activeTab === "topic" && (
//                 <>
//                   <h2>Topic Details</h2>
//                   <pre style={styles.pre}>{result.topic_details}</pre>

//                   <button
//                     style={styles.copyBtn}
//                     onClick={() => copyText(result.topic_details)}
//                   >
//                     Copy
//                   </button>
//                 </>
//               )}

//               {activeTab === "keywords" && (
//                 <>
//                   <h2>SEO Keywords</h2>
//                   <pre style={styles.pre}>{result.keywords}</pre>

//                   <button
//                     style={styles.copyBtn}
//                     onClick={() => copyText(result.keywords)}
//                   >
//                     Copy
//                   </button>
//                 </>
//               )}

//               {activeTab === "meta" && (
//                 <>
//                   <h2>Meta Tags</h2>
//                   <pre style={styles.pre}>{result.meta_tags}</pre>

//                   <button
//                     style={styles.copyBtn}
//                     onClick={() => copyText(result.meta_tags)}
//                   >
//                     Copy
//                   </button>
//                 </>
//               )}

//               {activeTab === "outline" && (
//                 <>
//                   <h2>SEO Outline</h2>
//                   <pre style={styles.pre}>{result.outline}</pre>

//                   <button
//                     style={styles.copyBtn}
//                     onClick={() => copyText(result.outline)}
//                   >
//                     Copy
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// /* -------------------- STYLES -------------------- */

// const styles = {
//   page: {
//     minHeight: "100vh",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     background: "linear-gradient(135deg, #1c1f26, #0e1217)",
//     padding: "20px",
//     fontFamily: "Arial, sans-serif",
//   },
//   card: {
//     width: "750px",
//     background: "rgba(255, 255, 255, 0.1)",
//     padding: "30px",
//     borderRadius: "14px",
//     backdropFilter: "blur(10px)",
//     color: "#fff",
//     boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
//   },
//   title: {
//     textAlign: "center",
//     marginBottom: "20px",
//     fontSize: "26px",
//     fontWeight: "bold",
//   },
//   textarea: {
//     width: "100%",
//     height: "120px",
//     padding: "12px",
//     borderRadius: "8px",
//     fontSize: "16px",
//     border: "none",
//     marginBottom: "15px",
//     outline: "none",
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     fontSize: "18px",
//     borderRadius: "8px",
//     background: "#4CAF50",
//     border: "none",
//     color: "#fff",
//     cursor: "pointer",
//     marginBottom: "20px",
//   },
//   tabs: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginBottom: "10px",
//   },
//   tabButton: {
//     flex: 1,
//     padding: "10px 0",
//     background: "transparent",
//     border: "1px solid rgba(255,255,255,0.3)",
//     color: "#fff",
//     cursor: "pointer",
//     fontSize: "14px",
//     borderRadius: "6px",
//     marginRight: "8px",
//   },
//   outputBox: {
//     padding: "15px",
//     borderRadius: "10px",
//     background: "rgba(0,0,0,0.3)",
//   },
//   pre: {
//     whiteSpace: "pre-wrap",
//     overflowWrap: "break-word",
//     fontSize: "14px",
//     lineHeight: "1.5",
//     maxHeight: "370px",
//     overflowY: "auto",
//     background: "rgba(255,255,255,0.1)",
//     padding: "15px",
//     borderRadius: "8px",
//     marginBottom: "10px",
//   },
//   copyBtn: {
//     padding: "8px 14px",
//     fontSize: "14px",
//     borderRadius: "8px",
//     border: "none",
//     background: "#2196F3",
//     color: "#fff",
//     cursor: "pointer",
//   },
// };

// export default App;

import React, { useState } from "react";
import styles from "./AppC.module.css";

function AppC() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("topic");
  const [darkMode, setDarkMode] = useState(false);  // 🌙 Theme state

  const runSEO = async () => {
    if (!text.trim()) return alert("Please enter some text!");

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/projectC/run_chain`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      setResult(data);
    } catch (err) {
      alert("Error: " + err.message);
    }

    setLoading(false);
  };

  const copyText = (value) => {
    navigator.clipboard.writeText(value);
    alert("Copied!");
  };

  return (
    <div className={`${styles.scope} ${darkMode ? styles.dark : styles.light}`}>
      <div className={styles.card}>
        {/* TITLE + THEME SWITCH */}
        <div className={styles.headerRow}>
          <h1 className={styles.title}>SEO Optimization Tool</h1>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={styles.themeButton}
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>

        <textarea
          placeholder="Enter your content..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.textarea}
        />

        <button onClick={runSEO} className={styles.button}>
          {loading ? "Processing..." : "Generate SEO Data"}
        </button>

        {result && (
          <div>
            {/* TAB BUTTONS */}
            <div className={styles.tabs}>
              {["topic", "keywords", "meta", "outline"].map((tab) => (
                <button
                  key={tab}
                  className={`${styles.tabButton} ${activeTab === tab ? styles.tabActive : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>

            {/* TAB CONTENT */}
            <div className={styles.outputBox}>
              {activeTab === "topic" && (
                <OutputSection
                  title="Topic Details"
                  text={result.topic_details}
                  copyText={copyText}
                />
              )}

              {activeTab === "keywords" && (
                <OutputSection
                  title="SEO Keywords"
                  text={result.keywords}
                  copyText={copyText}
                />
              )}

              {activeTab === "meta" && (
                <OutputSection
                  title="Meta Tags"
                  text={result.meta_tags}
                  copyText={copyText}
                />
              )}

              {activeTab === "outline" && (
                <OutputSection
                  title="SEO Outline"
                  text={result.outline}
                  copyText={copyText}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------- SECTION CARD COMPONENT ---------------- */
function OutputSection({ title, text, copyText }) {
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <button className={styles.copyBtn} onClick={() => copyText(text)}>
          Copy
        </button>
      </div>

      <pre className={styles.pre}>{text}</pre>
    </div>
  );
}

export default AppC;
