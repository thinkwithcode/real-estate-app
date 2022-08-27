import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Favaourate from "./components/Favaourate";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Search />
            </>
          }
        />
        <Route
          exact
          path="/favorate"
          element={
            <>
              <Favaourate />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
