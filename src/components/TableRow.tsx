import { useState } from "react";
import CheckBox from "./CheckBox";

export interface RowProps {
  name: string;
  device: string;
  path: string;
  status: string;
}

const TableRow = ({ name, device, path, status }: RowProps) => {
  const [highlight, setHighlight] = useState(false);

  const applyHighlight = (checked: boolean) => {
    setHighlight(checked);
  };

  return (
    <>
      <tr className={highlight ? "table-row highlight-row" : "table-row"}>
        <td>
          <CheckBox
            name={name}
            device={device}
            isDisabled={status == "scheduled" ? true : false}
            onCheck={applyHighlight}
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
