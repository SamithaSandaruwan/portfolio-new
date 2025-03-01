"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Home from "./home/page";

export default function Main() {
  const [loading, setLoading] = useState(true);

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
