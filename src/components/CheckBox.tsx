import { useState } from "react";

interface CheckBoxProps {
  name: string;
  isDisabled: boolean;
}

const CheckBox = ({ name, isDisabled }: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <input
        disabled={isDisabled}
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
