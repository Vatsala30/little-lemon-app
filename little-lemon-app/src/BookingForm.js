import { useReducer, useState } from "react";

function BookingForm(props)
{

    console.log(props);
    const [state,dispatch] = useReducer(props.updateTimes,props.availableTimes());
    
    const [formData, setFormData] = useState({resDate: "", resTime: "9:00", guests: 1, occasion: "Birthday" });

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
        props.onAdd(formData);
        console.log("form submitted!");
        setFormData({resDate: "", resTime: "9:00", guests: 1, occasion: "Birthday" });
    }


    return <div id="booking-form">
    <h1>Reserve a table!!</h1>
    <form onSubmit={submitHandler}>
    <label htmlFor="res-date">Choose date</label>
    <input type="date" name="resDate" id="res-date" value={formData.resDate} onChange={changeHandler}/>
   <label htmlFor="res-time">Choose time</label>
   <select id="res-time" name="resTime" value={formData.resTime} onChange={changeHandler} >
    {state.map((at)=>( <option>{at}</option>))};
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={formData.guests} onChange={changeHandler}/>
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion" name="occasion" value={formData.occasion} onChange={changeHandler}>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation"/>

        </form>
    </div>
    
}

export default BookingForm;