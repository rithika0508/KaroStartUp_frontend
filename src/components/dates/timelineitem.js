import React from "react";
const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ color: "firebrick" }}>
        {data.date}
      </span>
      <br></br>
      <span
        className="details"
        style={{ color: "rgba(252,76,60,1)", fontWeight: "600" }}
      >
        {data.text}
      </span>
      <time>{data.time}</time>
      <p>{data.time}</p>
      <span className="circle"></span>
    </div>
  </div>
);

export default TimelineItem;
