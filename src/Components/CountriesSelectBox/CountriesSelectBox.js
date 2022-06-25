import Select from "react-select";
import { getData } from "country-list";
import { useState } from "react";
import styles from "./CountriesSelectBox.module.css";

const countriesList = getData();

const options = countriesList.map((list) => {
  return {
    value: list.code,
    label: list.name,
  };
});

// const colourStyles = {
//   control: styles => ({ ...styles, backgroundColor: 'white' }),
//   option: (styles, { data, isDisabled, isFocused, isSelected }) => {
//     const color = chroma(data.color);
//     return {
//       ...styles,
//       backgroundColor: isDisabled ? 'red' : blue,
//       color: '#FFF',
//       cursor: isDisabled ? 'not-allowed' : 'default',
//     },
//   },
// };

const CountriesSelectBox = ({ errorMessage }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className={`${styles.input__group}`}>
      <Select
        options={options}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        className={`${styles.select__box}`}
      />
      <span className={`${styles.error__message}`}></span>
    </div>
  );
};

export default CountriesSelectBox;
