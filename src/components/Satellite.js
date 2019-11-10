import React from "react";
import PanelBlock from "./PanelBlock";

const Satellite = () => {
  return (
    <div className="container centred">
      <div className="satellite">
        <div className="sat-right-deflector">
          <PanelBlock />
        </div>
        <div className="sat-right-arm"></div>
        <div className="body-container">
          <div className="sat-body-rear"></div>

          <div className="sat-body-front">
            <div className="control-panel">
              <div className="control-screen"></div>
              <div className="button-1"></div>
              <div className="button-2"></div>
              <div className="button-3"></div>
            </div>
          </div>
          <div className="sat-body-comms">
            <div className="sat-comms-arm"></div>
            <div className="sat-comms-dish"></div>
            <div className="antenna">
              <div className="ant-1"></div>
              <div className="ant-2"></div>
            </div>
          </div>
        </div>
        <div className="sat-left-arm"></div>
        <div className="sat-left-deflector">
          <PanelBlock />
        </div>
      </div>
    </div>
  );
};

export default Satellite;
