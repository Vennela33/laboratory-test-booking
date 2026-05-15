import {Typography,Grid,Button} from "@mui/material";

const slots=[
"09:00 AM",
"10:00 AM",
"11:00 AM",
"12:00 PM",
"01:00 PM",
"02:00 PM",
"03:00 PM",
"04:00 PM",
"05:00 PM",
"06:00 PM",
];

function TimeSlots({
selectedSlot,
setSelectedSlot,
bookingDate
}){

const convertToMinutes=(time)=>{

const [part,period]=
time.split(" ");

let [hours,minutes]=
part.split(":").map(Number);

if(period==="PM" &&hours!==12){
  hours+=12;
}

if(period==="AM" &&hours===12){
  hours=0;
}

return hours*60+minutes;

};

const isPastSlot=(slot)=>{

if(!bookingDate)
return false;

const now=new Date();

const isToday= bookingDate.toDateString()===now.toDateString();

if(!isToday)
return false;

return convertToMinutes(slot)<=now.getHours()*60+now.getMinutes();

};

return(

<>

<Typography
fontWeight="bold"
mb={2}
>
Select Time Slot
</Typography>

<Grid
container
spacing={2}
>
{slots.map((slot)=>(
<Grid item xs={6} sm={4} md={3} key={slot}>

<Button
  fullWidth
  variant={
    selectedSlot===slot
    ? "contained"
    : "outlined"
  }
  disabled={isPastSlot(slot)}
  onClick={()=>setSelectedSlot(slot)}
  sx={{borderRadius:3,py:1.5}}
>
  {slot}
</Button>

</Grid>

))}

</Grid>

</>

)}

export default TimeSlots