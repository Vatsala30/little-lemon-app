import './App.css';
import HomePage from './HomePage';
import { Routes,Route } from 'react-router-dom';
import Chicago from './Chicago';
import {BookingPage} from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <>
   <Routes> 
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/about" element={<Chicago />}></Route>
    <Route path="/menu" element={<HomePage/>}></Route>
    <Route path="/reservations" element={<BookingPage/>}></Route>
    <Route path="/order-online" element={<HomePage/>}></Route>
    <Route path="/login" element={<HomePage/>}></Route>
    <Route path="/confirmed-booking" element={<ConfirmedBooking/>}></Route>
  </Routes>
  
    
    </>
  );
}

export default App;
