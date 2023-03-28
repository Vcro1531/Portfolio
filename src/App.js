import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Root />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;