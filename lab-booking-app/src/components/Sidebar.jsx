import {Drawer,List,ListItemButton,ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,Paper,Button,
  Box
} from "@mui/material";
import ScienceIcon from "@mui/icons-material/Science";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DescriptionIcon from "@mui/icons-material/Description";
import {Link,useLocation} from "react-router-dom";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

const drawerWidth = 240;

function Sidebar() {

  const location = useLocation();

  const menuItems = [
    {
      text:"Laboratory Booking",
      icon:<ScienceIcon/>,
      path:"/"
    },

  ];

  return (

    <Drawer
      variant="permanent"
      sx={{
        width:drawerWidth,
        flexShrink:0,
        "& .MuiDrawer-paper":{
          width:drawerWidth,
          boxSizing:"border-box",
          borderRight:"1px solid #eee"
        }
      }}
    >
      <Toolbar>
        <Box sx={{
display:"flex",
alignItems:"center",
gap:1,
mt:2,
mb:5}}
>

<LocalHospitalIcon sx={{
fontSize:45,
color:"#2563eb",
background:"#eef4ff",
borderRadius:3,
p:1
}}
/>
        <Typography sx={{
          fontSize:20,
          fontWeight:"bold",
          color:"primary",
        }}
        >
          AI Healthcare
        </Typography>
        </Box>
      </Toolbar>

      <Box sx={{overflow:"auto"}}>
        <List>
          {menuItems.map((item)=>(
            <ListItemButton
              key={item.text}
              component={Link}
              to={item.path}
              selected={
                location.pathname===item.path}
                sx={{mx:1,mb:1,borderRadius:3,color:"#555",transition:"0.3s","&:hover":{backgroundColor:"#e3f2fd"},
                "&.Mui-selected":{
              backgroundColor:"#1976d2",
              color:"white"},
              "&.Mui-selected:hover":{
                backgroundColor:"#1565c0"}
              }}
              >
              <ListItemIcon
              sx={{color:
              location.pathname===item.path
                ? "white"
                : "#555"
              }}
            >
          {item.icon}
          </ListItemIcon>
        <ListItemText
        primary={item.text}
        />

</ListItemButton>
          ))}
        </List>
      </Box>
      <Paper sx={{mt:"auto",p:3,borderRadius:5,background:"#f7fbff"}}>
      <HeadsetMicIcon sx={{fontSize:40,color:"#5b6df8"}}/>

<Typography fontWeight="bold" mt={2}>
Need Help?
</Typography>

<Typography fontSize={14} color="gray">
Our support team is here to help
</Typography>

<Typography fontSize={14} color="gray">
+919876543210
</Typography>

</Paper>

    </Drawer>
  );
}

export default Sidebar;