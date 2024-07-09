import CheckBox from "./CheckBox";

export interface RowProps {
  name: string;
  device: string;
  path: string;
  status: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  onCheck?: (name: string, path: string, isChecked: boolean) => void;
}

const TableRow = ({
  name,
  device,
  path,
  status,
  isChecked = false,
  isDisabled = false,
  onCheck = () => {},
}: RowProps) => {
  const handleCheck = (isChecked: boolean) => {
    onCheck(name, path, isChecked);
  };

  return (
    <>
      <tr className={isChecked ? "table-row highlight-row" : "table-row"}>
        <td>
          <CheckBox
            name={name}
            device={device}
            isChecked={isChecked}
            isDisabled={isDisabled}
            onCheck={handleCheck}
          />
        </td>
        <td>{device}</td>
        <td>{path}</td>
        <td>
          {status == "available" && <span className="status-indicator"></span>}
          {status}
        </td>
      </tr>
    </>
  );
};

export default TableRow;
