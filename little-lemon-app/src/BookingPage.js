import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "./mockAPI";
import BookingHeader from "./BookingHeader";
import { useNavigate } from "react-router-dom";


const updateTimes = (state,action) => {
    /*will handle the state change. This function will change the availableTimes based on the selected date.
     For now, the function can return the same available times regardless of the date.*/ 
    return fetchAPI(new Date(action.date));
}

 const initializeTimes= function(){
    /*will create the initial state for the availableTimes.*/
    //Then, change availableTimes to a reducer using the useReducer function and provide the two previous functions as parameters.
    
    const initialTimes = fetchAPI(new Date());
    return initialTimes;
      
}


function BookingPage(){

    const navigation = useNavigate();

    const submitForm = (formData) => {
        const isFormSubmitted = submitAPI(formData);
        if(isFormSubmitted){
            console.log(formData);
            navigation('/confirmed-booking', {state:formData});
    
        }
    }

   

    return <div className="container"> 
        <Header/>
        <Nav/>
        <main>
            <h1 data-testid="header">Reserve a table!!</h1>
           <BookingHeader/>
           <BookingForm availableTimes={initializeTimes} updateTimes={updateTimes} onSubmitForm ={submitForm}/>
        </main>
        <Footer/>
    </div>
}

export {BookingPage,initializeTimes,updateTimes};
