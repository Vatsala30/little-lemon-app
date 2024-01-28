function Bookings(props){
    return(
        <div id="bookings">
      <p>{props.newBooking.resDate} {props.newBooking.resTime} {props.newBooking.guests} {props.newBooking.occasion}</p>
       
    </div>);
}

export default Bookings;