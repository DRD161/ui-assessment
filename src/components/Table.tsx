import TableRow from "./TableRow";
import { RowProps } from "./TableRow";

interface TableProps {
  rows: RowProps[];
}

const Table = ({ rows }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="table-header">Name</th>
          <th className="table-header">Device</th>
          <th className="table-header">Path</th>
          <th className="table-header">Status</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <TableRow
            name={row.name}
            device={row.device}
            path={row.path}
            status={row.status}
            disableCheck={row.status == "scheduled" ? true : false}
            key={index}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
