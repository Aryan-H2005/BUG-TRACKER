import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddBug from "./pages/AddBug";
import EditBug from "./pages/EditBug";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBug />} />
        <Route path="/edit/:id" element={<EditBug />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
