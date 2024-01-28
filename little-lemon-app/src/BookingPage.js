import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import {useState } from "react";
import Bookings from "./Bookings";

function BookingPage(){
    const [newBooking, setNewBooking] = useState({resDate: "", resTime: "", guests: 0, occasion: "" });
    

    const updateTimes = (state,action) => {
        /*will handle the state change. This function will change the availableTimes based on the selected date.
         For now, the function can return the same available times regardless of the date.*/ 
        if(action.date==="2024-01-30")
           return  [...state, "21:00"];
        if(action.date==="2024-01-31")
          return  [...state, "22:00"];
        return state;
    }

    function initializeTimes(){
        /*will create the initial state for the availableTimes.*/
        //Then, change availableTimes to a reducer using the useReducer function and provide the two previous functions as parameters.
        const initialState = ["9:00","13:00","20:00"];
        return initialState;
    }




    function addBooking(booking){
        const latestBooking = {...newBooking};
        latestBooking.resDate = booking.resDate;
        latestBooking.resTime = booking.resTime;
        latestBooking.guests = booking.guests;
        latestBooking.occasion = booking.occasion;
        setNewBooking(latestBooking);

    }

    return <div className="container"> 
        <Header/>
        <Nav/>
        <main>
           <Bookings newBooking={newBooking}/>
           <BookingForm availableTimes={initializeTimes} onAdd={addBooking} updateTimes={updateTimes}/>
        </main>
        <Footer/>
    </div>
}

export default BookingPage;
