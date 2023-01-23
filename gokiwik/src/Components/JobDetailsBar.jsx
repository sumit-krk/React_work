import './CompanyCard.css';

const JobDetailsBar = (props) => {
    console.log(props,'dasssssssssssssssss')
  return (
    <>
      <div className="companyJobDetails">
        <div>{props.data1[0]}</div>
        <div
          style={{
            height: "3px",
            width: "3px",
            backgroundColor: "lightgrey",
            border: "1px solid lightgrey",
            borderRadius: "50%",
          }}
        ></div>
        <div>{props.data1[1]}</div>
        <div
          style={{
            height: "3px",
            width: "3px",
            backgroundColor: "lightgrey",
            border: "1px solid lightgrey",
            borderRadius: "50%",
          }}
        ></div>
        <div>{props.data1[2]}</div>
      </div>
    </>
  );
};

export default JobDetailsBar;
