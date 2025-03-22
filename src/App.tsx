import { Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";

// Pages
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
