import React from "react";
import Carousel from "../components/test-layout/Carousel";
import Section2 from "../components/test-layout/Section2";

function TestLayout() {
  return (
    <div>
      <div className="container mx-auto p-4">
        <Carousel />
        <Section2 />
      </div>
    </div>
  );
}

export default TestLayout;
