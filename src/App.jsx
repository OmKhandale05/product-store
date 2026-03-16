import { useState } from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Navbar search={search} setSearch={setSearch}/>
      <AppRoutes search={search}/>

      <ToastContainer
      position="bottom-left"
      autoClose={2000}
      theme="colored"
      
      />
    </div>
  );
}

export default App;
