import CheckBox from "./CheckBox";

export interface RowProps {
  name: string;
  device: string;
  path: string;
  status: string;
  disableCheck: boolean;
}

const TableRow = ({ name, device, path, status, disableCheck }: RowProps) => {
  return (
    <>
      <tr className="table-rows">
        <td>
          <CheckBox name={name} isDisabled={disableCheck} />
        </td>
        <td>{device}</td>
        <td>{path}</td>
        <td>{status}</td>
      </tr>
    </>
  );
};

export default TableRow;
