import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";

const Search = (props) => {
  const options = [
    { value: "Frontend", label: "Frontend" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "JAVA", label: "JAVA" },
  ];

  const [input, setInput] = useState([]);
  const [inputValuee, setInputValuee] = useState([]);

  const handleChange = (e) => {
    setInput(e);
    props.handleData(inputValuee);
  };

  useEffect(() => {
    for (let i = 0; i < input.length; i++) {
      setInputValuee([...inputValuee, input[i].value]);
    }
  }, [input]);

  return (
    <>
      <div className="searchInputContainer">
        {/* <input className="searchInput" />
            <p>Clear</p> */}
        <Select
          onChange={handleChange}
          options={options}
          isMulti
          className="basic-multi-select"
        />
      </div>
    </>
  );
};

export default Search;
