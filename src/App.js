
import { Routes, Route } from "react-router-dom";
import Detail from "./components/CountryDetail";
import HomePage from "./components/HomePage";
import { FiltersProvider } from "./store/filters-options-context"
import NoMatch from "./components/404";
import Header from "./components/Header";
import { useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

  

function App() {
  const [theme] = useMode();

  return (
    <div className="app">

        <FiltersProvider>
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:section/:country/:countryId" element={<Detail />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </FiltersProvider>
    </div>
  );
}

export default App;
