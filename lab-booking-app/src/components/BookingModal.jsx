import {Dialog,DialogContent,Typography,Box,IconButton,Card} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function BookingModal({
selectedTest,
setSelectedTest,
setShowSummary,
children
}) {

const handleClose=()=>{
setSelectedTest(null);
setShowSummary(false);
};

return(

<Dialog open={Boolean(selectedTest)}maxWidth="md"fullWidth>
<DialogContent sx={{p:4}}>

<IconButton onClick={handleClose}sx={{position:"absolute",right:10,top:10}}>

<CloseIcon/>

</IconButton>

<Typography variant="h5" fontWeight="bold"mb={3}>
Laboratory Test Booking

</Typography>

<Card sx={{p:3,mb:3,bgcolor:"#f0f7ff",borderRadius:3}}>

<Box
display="flex"
justifyContent="space-between"
alignItems="center"
flexWrap="wrap"
>

<Box>

<Typography
variant="h6"
fontWeight="bold"
color="primary"
>

{selectedTest.name}

</Typography>

<Typography
color="text.secondary"
>

{selectedTest.description}

</Typography>

</Box>

<Typography
fontSize={25}
fontWeight="bold"
color="primary"
>

₹{selectedTest.price}

</Typography>

</Box>

<Box
display="flex"
gap={4}
mt={2}
>

<Typography>

<strong>Duration:</strong>{" "}

{selectedTest.duration}

</Typography>

<Typography>

<strong>Preparation:</strong>{" "}

{selectedTest.preparation}

</Typography>

</Box>

</Card>

{children}

</DialogContent>

</Dialog>

);

}

export default BookingModal;