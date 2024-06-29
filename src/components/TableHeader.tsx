interface TableHeaderProps {
  header: string;
}

const TableHeader = ({ header }: TableHeaderProps) => {
  return <th className="table-header">{header}</th>;
};

export default TableHeader;
