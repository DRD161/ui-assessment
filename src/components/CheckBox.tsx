import { useState } from "react";

interface CheckBoxProps {
  name: string;
  device: string;
  isDisabled: boolean;
  onCheck: (isChecked: boolean) => void;
}

const CheckBox = ({ name, isDisabled, onCheck }: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    onCheck(!isChecked);
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
