import React from "react";
import "../styles/cloud-layer.css";

const CloudEffect = () => {
  return (
    <div className="floating-clouds">
      <img src="images/cloud1.png" className="cloud" style={{ "--i": 1 } as React.CSSProperties} />
      <img src="images/cloud2.png" className="cloud" style={{ "--i": 2 } as React.CSSProperties} />
      <img src="images/cloud3.png" className="cloud" style={{ "--i": 3 } as React.CSSProperties} />
      <img src="images/cloud4.png" className="cloud" style={{ "--i": 4 } as React.CSSProperties} />
      <img src="images/cloud5.png" className="cloud" style={{ "--i": 5 } as React.CSSProperties} />
    </div>
  );
};

export default CloudEffect;
