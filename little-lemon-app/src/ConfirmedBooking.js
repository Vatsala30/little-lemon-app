import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import BookingHeader from "./BookingHeader";
import Footer from "./Footer";

function ConfirmedBooking(){
  const location = useLocation();
  const newBooking = location.state;

    return <div className="container"> 
    <Header/>
    <Nav/>
    <main>
       <BookingHeader/>
       <div id="booking-details">
       <h1>Yayyy!! Details Are Submitted</h1>
       <h2>Here are the details of your confirmed booking</h2>
       <p class="selected-date">Selected Date:    {newBooking.resDate}</p>
       <p class="selected-time">Selected Time:    {newBooking.resTime}</p>
       <p class="guests">Number Of Guests: {newBooking.guests}</p>
       <p class="occasion">Occasion:         {newBooking.occasion}</p>
       </div>
    </main>
    <Footer/>
</div>
}

export default ConfirmedBooking;