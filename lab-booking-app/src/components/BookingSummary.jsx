import {Card,Typography,Box,Divider} from "@mui/material";

function BookingSummary({

patientName,
patientAge,
patientEmail,
patientNumber,
selectedTest,
bookingDate,
selectedSlot

}) {

const details=[

{
label:"Patient Name",
value:patientName || "-"
},

{
label:"Patient Age",
value:patientAge || "-"
},

{
label:"Phone Number",
value:patientNumber || "-"
},

{
label:"Patient Email",
value:patientEmail || "-"
},

{
label:"Test",
value:selectedTest?.name || "-"
},

{
label:"Booking Date",
value:bookingDate
? bookingDate.toLocaleDateString("en-IN")
: "-"
},

{
label:"Time Slot",
value:selectedSlot || "-"
},

{
label:"Total Price",
value:`₹${selectedTest?.price || 0}`
}

];

return(

<Card sx={{p:3,borderRadius:3,boxShadow:3}}>

<Typography variant="h6"fontWeight="bold"mb={2}>

Booking Summary

</Typography>

<Divider sx={{mb:2}}/>

{details.map((item,index)=>(

<Box sx={{display:"flex",justifyContent:"space-between", alignItems:"center",mb:2}}>

<Typography fontWeight={600}>

{item.label}:

</Typography>

<Typography>

{item.value}

</Typography>

</Box>

))}

</Card>

);
}

export default BookingSummary;