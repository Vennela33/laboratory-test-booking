import {Card,CardContent,Typography,Box,Chip,Button} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function LabTestCard({
test,
selectedTest,
setSelectedTest
}){

const isSelected=selectedTest?.id===test.id;

return(
  <Card sx={{cursor:"pointer",height:"100%",
        borderRadius:4,
        transition:"0.3s",
        border:
        isSelected
        ? "2px solid #1976d2"
        : "1px solid #eee",
        background:isSelected? "#e3f2fd": "white",
        "&:hover":{
        transform:"translateY(-8px)",
        boxShadow:8
      }
    }}
  >

  <CardContent>

  <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>

<Typography variant="h6" fontWeight="bold">

{test.name}

</Typography>

<Chip

label={`₹${test.price}`}
sx={{ml:30,mt:-8}}
color="primary"

/>

</Box>

<Typography
color="text.secondary"
mb={3}
>

{test.description}

</Typography>

<Box sx={{
display:"flex",
alignItems:"center",
gap:1,
mb:2,
}}
>

<AccessTimeIcon
fontSize="small"
color="primary"
/>

<Typography>

<b>Duration:</b>{" "}

{test.duration}

</Typography>

</Box>

<Box sx={{
display:"flex",
alignItems:"center",
gap:1,
mb:2}}
>

<MedicalServicesIcon
fontSize="small"
color="primary"
/>

<Typography>

<b>Preparation:</b>{" "}

{test.preparation ||
"No preparation needed"}

</Typography>

</Box>

<Button
  fullWidth
  variant="contained"
  sx={{borderRadius:3}}
  onClick={()=>
  setSelectedTest(test)
  }
>

Book Test

</Button>

</CardContent>

</Card>

)}

export default LabTestCard;