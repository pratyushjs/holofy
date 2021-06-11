import React, { useEffect, useState } from "react";
import "./App.css";

import DragNDrop from "./components/DragNDrop";

const defaultData = [
  { title: "group 1", items: [1] },
  { title: "group 2", items: [] },
  { title: "group 3", items: [] },
  { title: "group 4", items: [] },
];

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    if (localStorage.getItem("List")) {
      console.log(localStorage.getItem("List"));
      setData(JSON.parse(localStorage.getItem("List")));
    } else {
      setData(defaultData);
    }
  }, [setData]);

  return (
    <div className="App">
      <DragNDrop data={data} />
    </div>
  );
}

export default App;
