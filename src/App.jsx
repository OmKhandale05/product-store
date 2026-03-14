import { useState } from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Navbar search={search} setSearch={setSearch}/>
      <AppRoutes search={search}/>
    </div>
  );
}

export default App;
