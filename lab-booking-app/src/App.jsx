import {Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import LaboratoryBooking from "./pages/LaboratoryBooking";
import Box from "@mui/material/Box";

function App() {

  return (
      <Box sx={{display:"flex"}}>
        <Sidebar/>
        <Box component="main" sx={{flexGrow:1,p:3}}>
        <Routes>
          <Route path="/" element={<LaboratoryBooking/>}/>
        </Routes>
      </Box>
    </Box>
)}

export default App