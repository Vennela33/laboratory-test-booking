import {AppBar,Toolbar,Typography,Badge} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Navbar(){

return(

<AppBar
position="fixed"
sx={{top:0,ml:"260px",width:"calc(100% - 240px)",height:"50px",backgroundColor:"#fff",color:"#000"}}
>

<Toolbar>

<Typography
variant="h6"
fontWeight="bold"
sx={{flexGrow:1}}
>

AI Healthcare Laboratory Booking

</Typography>

<Badge
badgeContent={3}
color="error">

<NotificationsIcon/>

</Badge>

</Toolbar>

</AppBar>

)

}

export default Navbar;