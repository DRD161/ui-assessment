interface CheckBoxProps {
  name: string;
  device: string;
  isDisabled: boolean;
  isChecked: boolean;
  onCheck: (isChecked: boolean) => void;
}

const CheckBox = ({ name, isChecked, isDisabled, onCheck }: CheckBoxProps) => {
  const handleCheck = () => {
    onCheck(!isChecked);
  };

  return (
    <>
      <input
        disabled={isDisabled}
        type="checkbox"
        className="checkbox"
        id={name}
        checked={isChecked}
        onChange={handleCheck}
      />
      <label htmlFor={name}>{name}</label>
    </>
  );
};

export default CheckBox;
