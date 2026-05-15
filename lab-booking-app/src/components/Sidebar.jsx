import {Drawer,List,ListItemButton,ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box
} from "@mui/material";
import ScienceIcon from "@mui/icons-material/Science";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DescriptionIcon from "@mui/icons-material/Description";
import {Link,useLocation} from "react-router-dom";

const drawerWidth = 240;

function Sidebar() {

  const location = useLocation();

  const menuItems = [
    {
      text:"Laboratory Booking",
      icon:<ScienceIcon/>,
      path:"/"
    },

    {
      text:"Appointments",
      icon:<EventNoteIcon/>,
      path:"/appointments"
    },

    {
      text:"Lab Reports",
      icon:<DescriptionIcon/>,
      path:"/reports"
    }
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
        <Typography
          variant="h6"
          fontWeight="bold"
          color="primary"
        >
          AI Healthcare
        </Typography>
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
    </Drawer>
  );
}

export default Sidebar;