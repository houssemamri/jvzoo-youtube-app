import React from "react";
import NachiPage1 from "../components/NachiPage1";
import dynamic from "next/dynamic";

const DynamicExample = dynamic(() => import("../components/header"), {
  ssr: false,
});

function Nachi() {
  return (
    <div>
      {typeof window !== "undefined" && <DynamicExample />}
      <NachiPage1 />
    </div>
  );
}

export default Nachi;
