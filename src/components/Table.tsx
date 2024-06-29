import TableHeader from "./TableHeader";
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
          <TableHeader header={"Name"} />
          <TableHeader header={"Device"} />
          <TableHeader header={"Path"} />
          <TableHeader header={"Status"} />
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <TableRow
            name={row.name}
            device={row.device}
            path={row.path}
            status={row.status}
            key={index}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
