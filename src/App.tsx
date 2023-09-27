import "./App.css";
import Filters from "./components/Filters";
import Results from "./components/Results";
import Search from "./components/Search";

function App() {
  return (
    <div className="grid grid-cols-[1fr,3fr] gap-8">
      <div className="flex flex-col gap-6">
        <Search />
        <Filters />
      </div>
      <div className="mb-[32px]">
        <Results />
      </div>
    </div>
  );
}

export default App;
