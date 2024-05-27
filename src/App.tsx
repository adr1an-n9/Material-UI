import "./App.css";
import {
  Table,
  RangePicker,
  Charts,
  Form,
  Dropdown,
  Skeleton,
} from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Material UI</h1>
      </header>
      <div className="Element">
        <h2>Table</h2>
        <Table />
      </div>
      <div className="Element">
        <h2>RangePicker</h2>
        <RangePicker />
      </div>
      <div className="Element">
        <h2>Charts</h2>
        <Charts />
      </div>
      <div className="Element">
        <h2>Form</h2>
        <Form />
      </div>
      <div className="Element-3">
        <Dropdown />
      </div>
      <div className="Element-3">
        <h2>Skeleton</h2>
        <Skeleton />
      </div>
    </div>
  );
}

export default App;
