import {
Paper,
Grid,
Typography
} from "@mui/material";

const data=[

["Trusted & Secure"],
["Quick & Easy"],
["Accurate Reports"],
["24/7 Support"]

]

function BottomFeatures(){

return(

<Paper
sx={{
mt:4,
borderRadius:5,
p:4
}}
>

<Grid container>

{data.map((x)=>(

<Grid item xs={3}>

<Typography
fontWeight="bold"
>

{x[0]}

</Typography>

<Typography color="gray">

Reliable healthcare

</Typography>

</Grid>

))}

</Grid>

</Paper>

)

}

export default BottomFeatures