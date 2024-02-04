import { useNavigate } from "react-router-dom";

function ReserveTable(){
    const navigation = useNavigate();
    const clickHandler = ()=>{
        navigation('/booking-page');
    }
   
       return <button onClick={clickHandler} id="reserve-button">Reserve a table</button>
   
}

export default ReserveTable;