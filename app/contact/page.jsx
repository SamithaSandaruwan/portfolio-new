// "use client";

// import React from "react";
// import { useState, useEffect } from "react";
// import { FaWhatsapp , FaGithub , FaFacebook , FaLinkedin , FaYoutube , FaBehance} from "react-icons/fa";

// const Contact = () => {
//   const EncryptionText = ({ text, speed = 100, duration = 2000 }) => {
//     const chars =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
//     const [displayedText, setDisplayedText] = useState(text);
//     const [running, setRunning] = useState(true);

//     useEffect(() => {
//       let interval;
//       let timeout;

//       if (running) {
//         let iterations = 0;
//         interval = setInterval(() => {
//           setDisplayedText((prev) =>
//             prev
//               .split("")
//               .map((char, i) =>
//                 Math.random() > 0.5
//                   ? chars[Math.floor(Math.random() * chars.length)]
//                   : text[i]
//               )
//               .join("")
//           );
//           iterations++;

//           // Stop after a set duration
//           if (iterations > duration / speed) {
//             clearInterval(interval);
//             setDisplayedText(text);
//             setRunning(false);
//           }
//         }, speed);
//       }

//       return () => {
//         clearInterval(interval);
//         clearTimeout(timeout);
//       };
//     }, [running, text, speed, duration]);

//     return <span>{displayedText}</span>;
//   };

//   return (
//     <div className="flex flex-grow flex-col justify-between p-10 space-y-6">
//       <div className="flex flex-col items-start space-y-6">
//         <h1 className=" text-4xl font-bold text-[#61afef] pb-5">
//           <EncryptionText
//             text=">_ Let's Get In Touch"
//             speed={100}
//             duration={2000}
//           />
//         </h1>
//         <p>
//           As of now, I'm not looking for any new job opportunities, but my inbox
//           is always open if you want to communicate with me. Hit me up if you
//           have some questions, want a collaboration, or just play a game of chess.
//           I'll try to get back to you as soon as I can.
//         </p>
//       </div>

//       {/* Social media section */}
//       <div className="flex flex-col items-center space-y-5">
//         <h2 className="text-2xl font-bold">Check out my social profiles</h2>
//         <div className="flex flex-row space-x-5">
//           <p className="text-green-500">
//             <FaWhatsapp size={30} />
//           </p>
//           <p>
//             <FaGithub size={30} />
//           </p>
//           <p className="text-blue-700">
//             <FaFacebook size={30} />
//           </p>
//           <p className="text-blue-400">
//             <FaLinkedin size={30} />
//           </p>
//           <p className="text-red-600">
//             <FaYoutube size={30} />
//           </p>
//           <p>
//             <FaBehance size={30} />
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaWhatsapp,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaBehance,
} from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Default animation duration
      once: true, // Ensures animation occurs only once
    });
  }, []);

  const EncryptionText = ({ text, speed = 100, duration = 2000 }) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    const [displayedText, setDisplayedText] = useState(text);
    const [running, setRunning] = useState(true);

    useEffect(() => {
      let interval;

      if (running) {
        let iterations = 0;
        interval = setInterval(() => {
          setDisplayedText((prev) =>
            prev
              .split("")
              .map((char, i) =>
                Math.random() > 0.5
                  ? chars[Math.floor(Math.random() * chars.length)]
                  : text[i]
              )
              .join("")
          );
          iterations++;

          if (iterations > duration / speed) {
            clearInterval(interval);
            setDisplayedText(text);
            setRunning(false);
          }
        }, speed);
      }

      return () => clearInterval(interval);
    }, [running, text, speed, duration]);

    return <span>{displayedText}</span>;
  };

  return (
    <div className="flex flex-grow flex-col justify-between p-10 space-y-6 w-5/6">
      <div className="flex flex-col items-start space-y-6">
        <h1
          className="text-4xl font-bold text-[#61afef] pb-5"
          data-aos="fade-up"
        >
          <EncryptionText text=">_ Let's Get In Touch" speed={100} duration={2000} />
        </h1>
        <p data-aos="fade-up" data-aos-delay="200">
          As of now, I'm not looking for any new job opportunities, but my inbox
          is always open if you want to communicate with me. Hit me up if you
          have some questions, want a collaboration, or just play a game of chess.
          I'll try to get back to you as soon as I can.
        </p>
      </div>

      {/* Social media section */}
      <div className="flex flex-col items-center space-y-5" data-aos="fade-up" data-aos-delay="400">
        <h2 className="text-2xl font-bold">Check out my social profiles</h2>
        <div className="flex flex-row space-x-5" data-aos="fade-up" data-aos-delay="600">
          <p className="text-green-500">
            <FaWhatsapp size={30} />
          </p>
          <p>
            <FaGithub size={30} />
          </p>
          <p className="text-blue-700">
            <FaFacebook size={30} />
          </p>
          <p className="text-blue-400">
            <FaLinkedin size={30} />
          </p>
          <p className="text-red-600">
            <FaYoutube size={30} />
          </p>
          <p>
            <FaBehance size={30} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
