import React from "react";
import CardListItem from "../Components/CardListItem";
import "./CompaniesListSelect.css";

export default function CompaniesListSelect() {
  const companies = [
    {
      title: "בנק הפועלים",
      subTitle: "בנקאות",
      link:
        "https://static.wixstatic.com/media/1da09e_e163cfcb5548462a97deba96511bb445~mv2.png/v1/fill/w_1000%2Ch_1000%2Cal_c%2Cq_90/file.jpg",
    },
    {
      title: "פרשמרקט",
      subTitle: "קמעונאות מזון",
      link:
        "https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/7e/d9/c7/7ed9c7ec-7022-b21e-a391-10cfe7cf14ef/source/256x256bb.jpg",
    },
    {
      title: "הומליס פלייס",
      subTitle: "חדרי כושר",
      link:
        "data:image/png;base64,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",
    },
    {
      title: "חילן",
      subTitle: "טכנולוגיה",
      link:
        "https://play-lh.googleusercontent.com/ld5tXVy0FnKXc4zzoTgkwCt52i4CwwH0-6FzRo6jNBOtrPRAog1e4L-HWCuA-nMyMDU",
    },
    {
      title: "בנק לאומי",
      subTitle: "בנקאות",
      link: "https://www.pc.co.il/wp-content/uploads/2015/12/leumi.600.jpg",
    },
    {
      title: "הומליס פלייס",
      subTitle: "חדרי כושר",
      link:
        "data:image/png;base64,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",
    },
    {
      title: "בנק הפועלים",
      subTitle: "בנקאות",
      link:
        "https://static.wixstatic.com/media/1da09e_e163cfcb5548462a97deba96511bb445~mv2.png/v1/fill/w_1000%2Ch_1000%2Cal_c%2Cq_90/file.jpg",
    },
  ];
  return (
    <div className="App1">
      <header className="App-header1">
        <div>
          <a className="login" href="#" target="_blank">
            {" "}
            כניסה{" "}
          </a>
        </div>
        <div className="question">?על איזו חברה תרצה/י להשפיע</div>
      </header>
      {companies.map((list, index) => {
        return (
          <CardListItem
            key={index}
            hideImg=""
            logo={list.link}
            name={list.title}
            par={list.subTitle}
            link={"VoteDirectors"} //need to add proper link
          />
        );
      })}
    </div>
  );
}
