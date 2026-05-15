import {Paper,Box,Typography} from "@mui/material";
import ScienceIcon from "@mui/icons-material/Science";
import BiotechIcon from "@mui/icons-material/Biotech";
import AssignmentIcon from "@mui/icons-material/Assignment";
function HeroSection(){
return(

    <Paper sx={{p:1,borderRadius:0,display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        background:"#f5f9ff",
        width:1250,
        height:120,
        ml:-7
    }}
    >

    <Box
    display="flex"
    alignItems="center"
    gap={3}
    >

<Box

sx={{

width:50,
ml:1,
mt:-2,
height:50,

display:"flex",

justifyContent:"center",

alignItems:"center",

background:"white",

borderRadius:4

}}

>

<ScienceIcon
sx={{
fontSize:30,
color:"#2563eb"
}}
/>

</Box>

<Box>

<Typography sx={{
fontSize:30,
fontWeight:"bold",
ml:10,mt:-6}}
>

Laboratory Test Booking

</Typography>

<Typography sx={{ color:"gray",ml:10,mt:1}}>

Choose from a wide range of tests

</Typography>

</Box>

</Box>

<Box
sx={{
display:"flex",
gap:2,
mr:5
}}
>

<AssignmentIcon
sx={{
fontSize:70,
color:"#8ea2ff"
}}
/>

<BiotechIcon
sx={{
fontSize:70,
color:"#2563eb"
}}
/>

</Box>

</Paper>

)

}

export default HeroSection