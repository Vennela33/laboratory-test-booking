import { useState } from "react";
import {Box,Typography,Grid} from "@mui/material";
import Navbar from "../components/Navbar";
import LabTestCard from "../components/LabTestCard";
import PatientForm from "../components/TestBookingForm";
import BookingSummary from "../components/BookingSummary";
import BookingModal from "../components/BookingModal";
import SummaryModal from "../components/SummaryModal";
import SuccessModal from "../components/SuccessModal";
import { validateForm } from "../utils/validations";
import tests from "../data/tests.json";

function LaboratoryBooking() {

const [selectedTest,setSelectedTest]=useState(null);

const [form,setForm]=useState({

patientName:"",
patientAge:"",
patientNumber:"",
patientEmail:"",
bookingDate:null,
selectedSlot:""

});

const [showSummary,setShowSummary]=useState(false);

const [bookingSuccess,setBookingSuccess]=useState(false);

const resetForm=()=>{
  setSelectedTest(null);
  setForm({
    patientName:"",
    patientAge:"",
    patientNumber:"",
    patientEmail:"",
    bookingDate:null,
    selectedSlot:""
  });
};

const handleChange=(field,value)=>{
  setForm(prev=>({
  ...prev,
  [field]:value
}))
}

const handleSaveDetails=()=>{
  const error=validateForm(form);
    if(error) return alert(error);
    setShowSummary(true);
};

const handleConfirmBooking=()=>{
  setShowSummary(false);
  setBookingSuccess(true);
};

return (

<Box sx={{bgcolor:"#f5f7fb",minHeight:"100vh"}}>

<Navbar/>

<Box sx={{maxWidth:"1300px",mx:"auto",p:4}}>

<Typography variant="h4" fontWeight="bold" mb={4}>

Laboratory Test Booking

</Typography>

<Typography variant="h6" fontWeight={600}mb={3}>

Available Tests

</Typography>

<Grid container spacing={3}>

{tests.map((test)=>(

<Grid item xs={12} md={6} lg={4} key={test.id}>

<LabTestCard
test={test}
selectedTest={selectedTest}
setSelectedTest={setSelectedTest}
/>

</Grid>

))}

</Grid>

</Box>

{selectedTest && (

<BookingModal
selectedTest={selectedTest}
setSelectedTest={setSelectedTest}
setShowSummary={setShowSummary}
>

<PatientForm

  {...form}
  setPatientName={(v)=>handleChange("patientName",v)}
  setPatientAge={(v)=>handleChange("patientAge",v)}
  setPatientNumber={(v)=>handleChange("patientNumber",v)}
  setPatientEmail={(v)=>handleChange("patientEmail",v)}
  setBookingDate={(v)=>handleChange("bookingDate",v)}
  setSelectedSlot={(v)=>handleChange("selectedSlot",v)}
  handleSaveDetails={handleSaveDetails}
/>

</BookingModal>

)}

<SummaryModal
  showSummary={showSummary}
  setShowSummary={setShowSummary}
  handleConfirmBooking={handleConfirmBooking}
>

<BookingSummary
selectedTest={selectedTest}
{...form}
/>

</SummaryModal>

<SuccessModal
bookingSuccess={bookingSuccess}
setBookingSuccess={setBookingSuccess}
selectedTest={selectedTest}
patientName={form.patientName}
bookingDate={form.bookingDate}
selectedSlot={form.selectedSlot}
resetForm={resetForm}
/>

</Box>

);
}

export default LaboratoryBooking;