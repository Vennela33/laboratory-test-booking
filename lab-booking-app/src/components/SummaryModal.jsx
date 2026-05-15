import {Dialog,DialogTitle,DialogContent,DialogActions,Button} from "@mui/material";

function SummaryModal({
showSummary,
setShowSummary,
handleConfirmBooking,
children
}){

return(

<Dialog
open={showSummary}
onClose={()=>
setShowSummary(false)
}
maxWidth="sm"
fullWidth
>

<DialogTitle>
Booking Summary
</DialogTitle>

<DialogContent>
{children}
</DialogContent>

<DialogActions>

<Button
variant="outlined"
onClick={()=>
setShowSummary(false)
}
>
Back
</Button>

<Button
variant="contained"
onClick={
handleConfirmBooking
}
>
Confirm Booking
</Button>

</DialogActions>

</Dialog>

)}

export default SummaryModal