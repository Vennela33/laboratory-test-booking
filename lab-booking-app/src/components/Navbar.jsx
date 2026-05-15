import {AppBar,Toolbar,Typography} from "@mui/material";

function Navbar(){

return(

<AppBar
position="fixed"
sx={{top:0,left:240,height:"50px",backgroundColor:"#fff",color:"#000"}}
>

<Toolbar>

<Typography
variant="h6"
fontWeight="bold"
>

AI Healthcare Laboratory Booking

</Typography>

</Toolbar>

</AppBar>

)

}

export default Navbar;