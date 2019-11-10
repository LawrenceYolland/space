import React from "react";
import Panel from "./Panel";

const PanelBlock = () => {
  let panelList = [];
  for (let i = 0; i < 8; i++) {
    panelList.push(<Panel key={i} />);
  }

  return panelList;
};

export default PanelBlock;
