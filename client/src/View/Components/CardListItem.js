import React from "react";
import "./CardListItem.css";
import { Link } from "react-router-dom";

function CompanyBar(props) {
  return (
    <div dir="rtl" className="background">
      <div className="companyitem">
        <div className="Column" id={props.hideImg ? "hideImg" : "withImg"}>
          <img id="companyimage" src={props.logo} alt="companyimage" />
        </div>
        <div className="Column" id="formoreres1">
          <div id="companyname">
            <ol>
              <p id="companyName">{props.name}</p>
              <p id="companytype">{props.par}</p>
            </ol>
          </div>
        </div>
        <div className="Column" id="nexticon">
          <Link to={props.link}>
            <img
              className="img1"
              src="https://image.flaticon.com/icons/png/512/130/130884.png"
              alt="nexticon"
              onClick=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default CompanyBar;
