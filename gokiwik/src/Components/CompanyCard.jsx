import "./CompanyCard.css";
import Card from "./Card";
import Data from "../db.json";
import Search from "./Search";
import { useState } from "react";
import { useEffect } from "react";

const CompanyCard = () => {
  const [data, setData] = useState([...Data]);
  const [selectData, setSelectData] = useState(['HTML']);
  const [finalData, setFinalData] = useState([]);

  const handleData = (e) => {
    setSelectData(e);
  };

  // useEffect(() => {
  //   Data.map((e) => {
  //     console.log(e, "e.TechStacks");
  //     for (let i = 0; i < selectData.length; i++) {
  //       for (let j = 0; j < e.TechStacks.length; j++) {
  //         if (selectData[i] === e.TechStacks[j]) {
  //           setFinalData([...finalData, e]);
  //         }
  //         // console.log('fileterrrrrr', e)
  //         // return selectData[i] === e.TechStacks[j]
  //       }
  //     }
  //   });
  // });

  Data=Data.map((e) => {
    console.log("e",e.TechStacks)
        let res=e?.TechStacks?.filter((e)=>{
        //   if(selectData.includes(e)){
        //     return e;
        // }
        console.log("this",e)
        })
        return res;
  });


 console.log(Data,"Data");
  // console.log(mydata,"my dataaaaa");

  return (
    <>
      <div className="mainContainer">
        <div className="container">
          <Search handleData={handleData} />
           {data.map((e) => {
                return (
                  <Card
                    CompanyTitle={e.CompanyTitle}
                    CompanyRole={e.JobRole}
                    JobDetails={e.JobDetails}
                    TechStacks={e.TechStacks}
                  />
                );
              })}
          {/* <div
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}
            className="companySection"
          >
            <div
              style={{ backgroundColor: hover ? "#66a5a5" : "" }}
              className="hoverpart"
            ></div>
            <div className="company">
              <div className="companyCard">
                <div className="leftSection">
                  <div className="leftSection1">
                    <Avatar
                      name={Data[0].CompanyTitle}
                      size="100"
                      round={true}
                    />
                  </div>
                  <div className="leftSection2">
                    <div className="companyTitle">{Data[0].CompanyTitle}</div>
                    <div className="companyRole">{Data[0].JobRole}</div>
                    <div className="companyJobDetails">
                      <div>{Data[0].JobDetails[0]}</div>
                      <div
                        style={{
                          height: "3px",
                          width: "3px",
                          backgroundColor: "lightgrey",
                          border: "1px solid lightgrey",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div>{Data[0].JobDetails[1]}</div>
                      <div
                        style={{
                          height: "3px",
                          width: "3px",
                          backgroundColor: "lightgrey",
                          border: "1px solid lightgrey",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div>{Data[0].JobDetails[2]}</div>
                    </div>
                  </div>
                </div>
                <div className="rightSection">
                  <div onMouseOver={handleTagsHover} style={{ backgroundColor: tagHover ? "#66a5a5" : "#EBF3F5" , color : tagHover ? "#fff" : "#66a5a5"}} onMouseLeave={handleTagsLeave} className="techTags">{Data[0].TechStacks[0]}</div>
                  <div className="techTags">{Data[0].TechStacks[1]}</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default CompanyCard;
