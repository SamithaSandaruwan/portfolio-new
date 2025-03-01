"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // For navigation after preloading

const Preloader = ({ setLoading }) => {
  const [text, setText] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const router = useRouter();

  // VS Code Style Code Lines (Properly Formatted)
  const codeLines = [
    "<span class='text-blue-400'>import</span> <span class='text-green-300'>React</span> <span class='text-blue-400'>from</span> <span class='text-red-400'>'react'</span>;",
    "<span class='text-blue-400'>import</span> <span class='text-green-300'>App</span> <span class='text-blue-400'>from</span> <span class='text-red-400'>'./App'</span>;",
    "",
    "<span class='text-blue-400'>function</span> <span class='text-green-300'>App</span>() {",
    "  <span class='text-blue-400'>return</span> (",
    "    <span class='text-green-300'>Samitha Sandaruwan</span>",
    "  );",
    "}",
    "<span class='text-blue-400'>export default</span> <span class='text-green-300'>App</span>;",,
  ];

  useEffect(() => {
    const cursorBlink = setInterval(() => setShowCursor((prev) => !prev), 500);

    let i = 0;
    const typeEffect = setInterval(() => {
      if (i < codeLines.length) {
        setText((prev) => [...prev, codeLines[i]]);
        i++;
      } else {
        clearInterval(typeEffect);
        setTimeout(() => {
          setLoading(false);
          router.push("/"); // Redirect to homepage after animation
        }, 1000);
      }
    }, 400);

    return () => {
      clearInterval(cursorBlink);
      clearInterval(typeEffect);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, setLoading]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[#1e1e1e] text-white font-mono"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 4, duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="p-4 bg-[#252526] rounded-lg shadow-lg w-[500px] h-64 overflow-hidden border border-[#3c3c3c]"
      >
        {/* VS Code Window Buttons */}
        <div className="flex space-x-2 mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        {/* Animated Typing Effect */}
        <pre className="mt-2 whitespace-pre-wrap text-sm">
          <div dangerouslySetInnerHTML={{ __html: text.join("<br/>") }} />
          {showCursor ? <span className="text-white">█</span> : ""}
        </pre>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;



// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const Preloader = ({ setLoading }) => {
//   const [text, setText] = useState("");
//   const [showCursor, setShowCursor] = useState(true);

//   const codeLines = [
//     "<span class='text-blue-400'>import</span> <span class='text-green-300'>React</span> <span class='text-blue-400'>from</span> <span class='text-red-400'>'react'</span>;",
//     "<span class='text-blue-400'>import</span> <span class='text-green-300'>App</span> <span class='text-blue-400'>from</span> <span class='text-red-400'>'./App'</span>;",
//     "",
//     "<span class='text-blue-400'>function</span> <span class='text-green-300'>App</span>() {",
//     "  <span class='text-blue-400'>return</span> (",
//     "    <span class='text-green-300'>Hello, World!</span>",
//     "  );",
//     "}",
//     "<span class='text-blue-400'>export default</span> <span class='text-green-300'>App</span>;",
//   ];

//   useEffect(() => {
//     const cursorBlink = setInterval(() => {
//       setShowCursor((prev) => !prev);
//     }, 500);

//     let i = 0;
//     const typeEffect = setInterval(() => {
//       if (i < codeLines.length) {
//         setText((prev) => prev + codeLines[i] + "<br/>");
//         i++;
//       } else {
//         clearInterval(typeEffect);
//         setTimeout(() => {
//           setLoading(false);
//         }, 1000);
//       }
//     }, 400);

//     return () => {
//       clearInterval(cursorBlink);
//       clearInterval(typeEffect);
//     };
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [setLoading]);

//   return (
//     <motion.div
//       className="fixed inset-0 flex items-center justify-center bg-[#1e1e1e] text-white font-mono"
//       initial={{ opacity: 1 }}
//       animate={{ opacity: 0 }}
//       transition={{ delay: 4, duration: 0.5 }}
//     >
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="p-4 bg-[#252526] rounded-lg shadow-lg w-[500px] h-64 overflow-hidden border border-[#3c3c3c]"
//       >
//         {/* VS Code Window Buttons */}
//         <div className="flex space-x-2 mb-2">
//           <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//           <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//           <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//         </div>

//         {/* Animated Typing Effect */}
//         <pre className="mt-2 whitespace-pre-wrap text-sm">
//           <div dangerouslySetInnerHTML={{ __html: text }} />
//           {showCursor ? <span className="text-white">█</span> : ""}
//         </pre>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Preloader;
