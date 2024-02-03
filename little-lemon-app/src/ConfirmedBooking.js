import { useLocation } from "react-router-dom";

function ConfirmedBooking(props){
  const location = useLocation();
  const newBooking = location.state;

    return(
        <div id="bookings">
      <p>{newBooking.resDate} {newBooking.resTime} {newBooking.guests} {newBooking.occasion}</p>
       
    </div>);
}

export default ConfirmedBooking;