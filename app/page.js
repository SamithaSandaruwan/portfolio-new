"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Home from "./home/page";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <div className= "min-h-screen">
          <Home/>
        </div>
      )}
    </>
  );
}
