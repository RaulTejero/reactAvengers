import { useEffect, useState } from "react";
import "./App.css";
import { List } from "./components/List";
import { Main } from "./components/Main";
import { getData } from "./services/data";

export function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <Main title={"Lista"} list={data?.results}/>
    </div>
  );
}
