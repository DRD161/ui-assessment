import { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { RowProps } from "./TableRow";

interface TableProps {
  rows: RowProps[];
}

interface CheckedOption {
  name: string;
  path: string;
}

const Table = ({ rows }: TableProps) => {
  const [checkedOptions, setCheckedOptions] = useState<CheckedOption[]>([]);

  const handleCheckAll = (isChecked: boolean) => {
    // get rows and filter by status. If status is "available", map into a new array
    const availableOptions = rows
      .filter((row) => row.status === "available")
      .map((row) => ({ name: row.name, path: row.path }));

    setCheckedOptions(isChecked ? availableOptions : []);
  };

  const handleCheck = (name: string, path: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedOptions((prev) => [...prev, { name, path }]);
    } else {
      setCheckedOptions((prev) =>
        prev.filter((option) => option.name !== name),
      );
    }
  };

  const isAllChecked =
    checkedOptions.length > 0 &&
    checkedOptions.length ===
      rows.filter((row) => row.status === "available").length;

  const isSomeChecked =
    checkedOptions.length > 0 &&
    checkedOptions.length <
      rows.filter((row) => row.status === "available").length;

  const handleDownload = () => {
    if (checkedOptions.length > 0) {
      const names = checkedOptions.map((option) => option.name).join(", ");
      const paths = checkedOptions.map((option) => option.path).join(", ");
      alert(`Device(s): ${names}\nPath(s): ${paths}`);
    } else {
      alert("Please make a selection");
    }
  };

  return (
    <div className="data-table">
      <div className="utility-bar">
        <input
          id="selectAll"
          className="checkbox"
          type="checkbox"
          checked={isAllChecked}
          onChange={(e) => handleCheckAll(e.target.checked)}
          // ref callback to check if the input element is available in the DOM.
          // If it is, set the indeterminate attribute based on whether or not some boxes are checked
          ref={(input) => {
            if (input) {
              input.indeterminate = isSomeChecked;
            }
          }}
        />
        <label htmlFor="selectAll" className="visually-hidden">
          Select All
        </label>
        <div className="selected">
          <p>Selected</p>
          <div>{checkedOptions.length}</div>
        </div>
        <button className="download" onClick={handleDownload}>
          <img src="/Download.svg" alt="download icon" />
          Download Selected
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <TableHeader header={"Name"} />
            <TableHeader header={"Device"} />
            <TableHeader header={"Path"} />
            <TableHeader header={"Status"} />
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              {...row}
              isChecked={checkedOptions.some(
                (option) => option.name === row.name,
              )}
              isDisabled={row.status === "scheduled"}
              onCheck={handleCheck}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
