import {Card,Typography,TextField,Button,Grid} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimeSlots from "./TimeSlots";

function PatientForm({
patientName,
setPatientName,
patientAge,
setPatientAge,
patientNumber,
setPatientNumber,
patientEmail,
setPatientEmail,
bookingDate,
setBookingDate,
selectedSlot,
setSelectedSlot,
handleSaveDetails
}) {

return(

<Card sx={{p:4,borderRadius:3}}>

<Typography
variant="h6"
fontWeight="bold"
mb={3}
>
Enter Patient Details
</Typography>

<Grid container spacing={3}>

<Grid item xs={6}>

<TextField
sx={{width:"700px"}}
label="Patient Name"
value={patientName}
onChange={(e)=>
setPatientName(
e.target.value
)
}
/>

</Grid>

<Grid item xs={6}>

<TextField
sx={{width:"700px"}}
type="number"
label="Patient Age"
value={patientAge}
inputProps={{min:0}}

onChange={(e)=>{

const value=e.target.value;

if(value==="" ||value>=0){
  setPatientAge(value)
}
}}
/>

</Grid>

<Grid item xs={6}>

<TextField
 sx={{width:"700px"}}
  label="Phone Number"
  value={patientNumber}
  onChange={(e)=>{
  const value=
  e.target.value
  .replace(/\D/g,"");
  if(value.length<=10){
  setPatientNumber(value)
  }
  }}
/>

</Grid>

<Grid item xs={12}>

<TextField
  sx={{width:"700px"}}
  type="email"
  label="Email"
  value={patientEmail}
  onChange={(e)=>
  setPatientEmail(e.target.value)
  }
/>

</Grid>

<Grid item xs={12}>

<Typography mb={1}>Booking Date</Typography>

<DatePicker
  selected={bookingDate}
  onChange={setBookingDate}
  minDate={new Date()}
  placeholderText="Select Date"
  className="form-input"
/>

</Grid>

<Grid item xs={12}>

<TimeSlots
selectedSlot={selectedSlot}
setSelectedSlot={setSelectedSlot}
bookingDate={bookingDate}
/>

</Grid>

<Grid item xs={12}>

<Button fullWidthvariant="contained" size="large" sx={{width:"700px",backgroundColor:"#1bbae6",color:"#fff"}} onClick={handleSaveDetails}>Save

</Button>
</Grid>
</Grid>
</Card>
)}

export default PatientForm;