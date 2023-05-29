import { useState } from "react";
import data from "./data";
import List from "./list";
const App = () => {
  const [people, setpeople] = useState(data);

  const handleBtn = () => {
    setpeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={handleBtn} type="button" className="btn btn-block">
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
