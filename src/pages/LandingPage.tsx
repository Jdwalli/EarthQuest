import React from "react";
import WorldMap from "../components/WorldMap";

const LandingPage: React.FunctionComponent = () => {
  return (
    <main className="map-section-v2">
        <div className="div-block-10"></div>
        <div className="map-wrapper">
            <WorldMap />
        </div>
      
    </main>
  );
};

export default LandingPage;