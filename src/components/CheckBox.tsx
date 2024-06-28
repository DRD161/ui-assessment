import { useState } from "react";

interface CheckBoxProps {
  name: string;
}

const CheckBox = ({ name }: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <input
        type="checkbox"
        className={isChecked ? "checkbox checked" : "checkbox"}
        id={name}
        checked={isChecked}
        onChange={handleCheck}
        aria-label="checkbox"
      />
      <label htmlFor={name}>{name}</label>
    </>
  );
};

export default CheckBox;
