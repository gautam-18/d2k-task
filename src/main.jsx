import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Details from "./pages/Details";
import { ContextProvider } from "./context/AppContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/users" element={<App />} />
        <Route path="/users/:id" element={<Details />} />
      </Routes>
    </Router>
  </ContextProvider>
);
