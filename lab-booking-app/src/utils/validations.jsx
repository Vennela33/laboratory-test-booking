export const validateForm = ({
  patientName,
  patientAge,
  patientNumber,
  patientEmail,
  bookingDate,
  selectedSlot
}) => {

  if (!patientName.trim()) {
    return "Please enter patient name";
  }

  if (
    patientAge === "" ||
    patientAge < 1 ||
    patientAge > 120
  ) {
    return "Please enter valid age";
  }

  if (patientNumber.length !== 10) {
    return "Phone number must contain 10 digits";
  }

  const emailPattern =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!patientEmail.trim()) {
    return "Please enter email";
  }

  if (!emailPattern.test(patientEmail)) {
    return "Please enter valid email";
  }

  if (!bookingDate) {
    return "Please select booking date";
  }

  if (!selectedSlot) {
    return "Please select time slot";
  }

  return null;
};