import { ComicsProvider } from "./context/ComicContext";
import ComicsRoll from "./components/ComicsRoll";
import DefLayout from "./layout/DefLayout";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <ComicsProvider>
      <Router>
        <DefLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comics" element={<ComicsRoll />} />
          </Routes>
        </DefLayout>
      </Router>
    </ComicsProvider>
  );
};

export default App;
