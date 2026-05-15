import {Dialog,DialogContent,Typography,Button,Box} from "@mui/material";
import CheckCircleIcon
from "@mui/icons-material/CheckCircle";

function SuccessPopup({
bookingSuccess,
setBookingSuccess,
selectedTest,
patientName,
bookingDate,
selectedSlot,
resetForm
}){

return(

<Dialog
open={bookingSuccess}
maxWidth="xs"
fullWidth
>

<DialogContent
sx={{
textAlign:"center",
p:4
}}
>

<CheckCircleIcon
color="success"
sx={{
fontSize:70,
mb:2
}}
/>

<Typography
variant="h5"
fontWeight="bold"
sx={{mb:1}}
>
Booking Successful
</Typography>

<Typography sx={{mb:1}}>
Your test has been booked.
</Typography>

<Box mb={3}>

<Typography>
Test: {selectedTest?.name}
</Typography>

<Typography>
Patient: {patientName}
</Typography>

<Typography>
Date:
{" "}
{bookingDate?.toLocaleDateString()}
</Typography>

<Typography>
Time: {selectedSlot}
</Typography>

</Box>

<Button
sx={{width:"110px",m:2}}
variant="contained"
onClick={()=>{
setBookingSuccess(false);
resetForm();
}}
>
Done
</Button>

</DialogContent>

</Dialog>

)}

export default SuccessPopup;