import React from "react";
import classes from "../../styles/div.module.css";

const Qualification = (props) => {
  return (
    <div style={{ textAlign: "justify" }}>
      <h3 className="mb-4 mt-4" style={{ color: "#white" }}>
        {props.degree}
      </h3>
      <h5 className="mb-4" style={{ color: "#01d293" }}>
        {props.institute}
      </h5>
      <h5 className="mb-4" style={{ color: "#White" }}>
        {props.year}
      </h5>
      <h5 className={`${classes.about__self}`}>{props.des}</h5>
    </div>
  );
};

export default Qualification;
