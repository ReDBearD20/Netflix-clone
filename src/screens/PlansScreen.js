import React from "react";
import "./PlansScreen.css";
const PlansScreen = () => {
  return (
    <div className="plansScreen__plan">
      <div className="plansScreen__info">
        <h5>
          Premium <br /> 4K + HDR{" "}
        </h5>
        <button>Subscribe</button>
      </div>
      <div className="plansScreen__info">
        <h5>
          Basic <br /> 720p{" "}
        </h5>
        <button>Subscribe</button>
      </div>
      <div className="plansScreen__info">
        <h5>
          Standard <br /> 1080p{" "}
        </h5>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default PlansScreen;
