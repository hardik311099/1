import React, { useState } from "react";
import "./card.css";
import Select from "react-select";


const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
function Cards() {
  const customStyles = {
    control: (base) => ({
      ...base,
      height: 20,
      // minHeight: 35,
    }),
    option: (base, state) => ({
      ...base,
      color: "#000",
      // backgroundColor: state.isSelected ? "red" : "#fff",
      backgroundColor: state.isSelected ? "red" : "#fff",
      "&:hover": { backgroundColor: "red" },
      cursor: "pointer",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="d-flex justify-content-around">
      <Select
        value={selectedOption}
        onChange={setSelectedOption}
        styles={customStyles}
        options={options}
        id="select"
      />
    </div>
  );
}

export default Cards;
