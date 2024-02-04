import { useReducer, useState } from "react";

function BookingForm(props)
{

    console.log(props);
    const [state,dispatch] = useReducer(props.updateTimes,props.availableTimes());
    
    const [formData, setFormData] = useState({resDate: "", resTime: "--- Select a Time ---", guests: 0, occasion: "--- Select an Occasion ---" });

    function changeHandler(e){
        setFormData({...formData,[e.target.name]: e.target.value});
        if(e.target.name==="resDate"){
            dispatch({
                date: e.target.value,
                
              });
        }
    }

    function submitHandler(e) {
        e.preventDefault();
        props.onSubmitForm(formData);
        console.log("form submitted!");

        setFormData({resDate: "", resTime: "--- Select a Time ---", guests: 0, occasion: "--- Select an Occasion ---" });
    }


    return <div id="booking-form">
    <h1>Reserve a table!!</h1>
    <form onSubmit={submitHandler}>
        <fieldset>
        <legend>Enter details:</legend>
    <label htmlFor="res-date" class="res-date">Choose date</label>
    <input type="date" name="resDate" id="res-date" class="res-date" value={formData.resDate} onChange={changeHandler} required/>
   <label htmlFor="res-time" class="res-time">Choose time</label>
   <select id="res-time" name="resTime" class="res-time" value={formData.resTime} onChange={changeHandler} required>
    {state.map((at)=>( <option key={at}>{at}</option>))};
   </select>
   <label htmlFor="guests" class="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" class="guests" value={formData.guests} onChange={changeHandler} required/>
   <label htmlFor="occasion" class="occasion">Occasion</label>
   <select id="occasion" name="occasion" class="occasion" value={formData.occasion} onChange={changeHandler} required>
      <option>--- Select an Occasion ---</option>
      <option>Birthday</option>
      <option>Anniversary</option>
      <option>Date</option>
      <option>Others</option>
   </select>
   </fieldset>
   <button aria-label="On Click" id="form-btn" type="submit" value="Make Your reservation" disabled={!formData.resDate || formData.resTime==="--- Select a Time ---" ||formData.occasion=== "--- Select an Occasion ---"}>Submit </button>

        </form>
    </div>
    
}

export default BookingForm;