import Table from "./components/Table";
import { tableData } from "./data/data.ts";

function App() {
  return (
    <>
      <Table rows={tableData} />
    </>
  );
}

export default App;
