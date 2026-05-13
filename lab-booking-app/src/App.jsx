import { Routes, Route } from "react-router-dom";
import LaboratoryBooking from "./pages/LaboratoryBooking";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LaboratoryBooking />} />
        

    </Routes>
  );
}

export default App;